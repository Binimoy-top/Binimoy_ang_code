import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, fromEvent, map, merge, Observable } from 'rxjs';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { tmpusers } from './tempuser.model';
import { TempusersService } from './tempusers.service';

@Component({
  selector: 'app-all-tempuser',
  templateUrl: './all-tempuser.component.html',
  styleUrls: ['./all-tempuser.component.sass']
})
export class AllTempuserComponent
extends UnsubscribeOnDestroyAdapter
 implements OnInit
  {

    displayedColumns=[
      'select',
      'img',
      'rollNo',
      'name',
      'department',
      'gender',
      'mobile',
      'email',
      'date',
      'actions'
    ];
    ExampleDatabase:TempusersService|null;
    dataSource:ExampleDataSource | null;
    selection=new SelectionModel<tmpusers>(true,[]);
    id:number;
    tempsusr:tmpusers |null;
  constructor(
    public httpclient:HttpClient,
    public dialog:MatDialog,
    public tmpusService:TempusersService,
    private snackBar:MatSnackBar
  ) 
  { 
    super();
  }
  @ViewChild(MatPaginator,{static:true}) paginator:MatPaginator;
  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild('filter',{static:true}) filter: ElementRef;
  @ViewChild(MatMenuTrigger)
  contextMenu:MatMenuTrigger;
  contextmenuPostion={x:'0px',y:'0px'};

  ngOnInit(): void {
    this.loadData();
  }

 public loadData(){
   this.ExampleDatabase=new TempusersService(this.httpclient);
   this.dataSource=new ExampleDataSource(
     this.ExampleDatabase,this.paginator,this.sort
   );
   this.subs.sink=fromEvent(this.filter.nativeElement,'keyup').subscribe(
     ()=>{
       if ( !this.dataSource){
         return;
       }
       this.dataSource.filter=this.filter.nativeElement.value;
     }
   );
 }

}

export class ExampleDataSource extends DataSource<tmpusers> 
{
  filterchange=new BehaviorSubject('');
  get filter():string {
    return this.filterchange.value;
  }
  set filter(filter:string){
    this.filterchange.next(filter);
  }
  filteredData:tmpusers[]=[];
  renderedData:tmpusers[]=[];

  constructor(
    public exampleDatabase:TempusersService,
    public paginator:MatPaginator,
    public _sort:MatSort
  ){
    super();
    // Reset to the first page when the user changes the filter.
    this.filterchange.subscribe(()=>
    (this.paginator.pageIndex=0));
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<tmpusers[]>  {
    // Listen for any changes in the base data, sorting, filtering, or pagination
      const displayDataChanges=[
      this.exampleDatabase.dataChange,
      this._sort.sortChange,
      this.filterchange,
      this.paginator.page,
      ];
      this.exampleDatabase.getAllTempUser();
      return merge(...displayDataChanges).pipe(
        map(()=>{
          this.filteredData=this.exampleDatabase.data
          .slice()
          .filter((tempusr:tmpusers)=>{
            const searchStr=(
              tempusr.id+
              tempusr.name +
              tempusr.email+
              tempusr.mobile
            ).toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
          });
           // Sort filtered data
          const sortedData=this.sortData(this.filteredData.slice());
        // Grab the page's slice of the filtered sorted data.
          const startIndex= this.paginator.pageIndex * this.paginator.pageSize;
          this.renderedData=sortedData.splice(
            startIndex,
            this.paginator.pageSize
          );
          return this.renderedData;
          
        })
      );
      
  }
  disconnect(){}
  /** Returns a sorted copy of the database data. */

    sortData(data:tmpusers[]):tmpusers[]
    {

      if(!this._sort.active || this._sort.direction ==='')
      {
        return data;
      }
      return data.sort((a,b)=>{
        let propertyA: number | string ='';
        let propertyB: number | string ='';
        switch (this._sort.active){
          case 'id':
            [propertyA,propertyB] =[a.id,b.id];
            break;
          case 'name':
            [propertyA,propertyB] =[a.name,b.name];
          case 'email':
            [propertyA,propertyB] =[a.email,b.email];
          case 'date':
            [propertyA,propertyB] =[a.date,b.date];
          case 'time':
            [propertyA,propertyB] =[a.department,b.department];
          case 'mobile':
            [propertyA,propertyB] =[a.mobile,b.mobile];
            break;  
        }
        const valueA=isNaN(+propertyA) ? propertyA : +propertyA;
        const valueB=isNaN(+propertyB) ? propertyB : +propertyB;
        return (
          (valueA <valueB ? -1: 1) * (this._sort.direction === 'asc' ? 1 : -1)
        );



      });
    }
  }

