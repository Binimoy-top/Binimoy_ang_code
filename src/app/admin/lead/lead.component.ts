import { AfterViewInit, Component, OnInit ,ViewChild} from '@angular/core';
import { NgxDatatableComponent } from 'src/app/tables/ngx-datatable/ngx-datatable.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Calendar } from 'src/app/calendar/calendar.model';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { DialogsComponent } from './dialogs/dialogs.component';

  

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.sass']
})
export class LeadComponent 
implements OnInit  {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;


  name;
  calendar: Calendar | null;
  numbers=[]
  constructor(public dialog:MatDialog) {
    for(let i=0;i<=1000;i++){
      this.numbers.push(i);
    
    }
    

    

   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // ngAfterViewInit(): void {
  //   this.dataSources.sort=this.sort;
  //   this.dataSources.paginator=this.paginator
  // }



  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSources = new MatTableDataSource(ELEMENT_DATA);

//dialogs
  addNewEvent(){
    let dialogRef=this.dialog.open(DialogsComponent);
    return dialogRef;
    // dialogRef.afterClosed().subscribe(res=>{
    //   console.log(`dialog result:${res}`)
      
    // })
  }


  applyFilteronTable(event:string){

    this.dataSources.filter=event.trim().toLowerCase();

  }



}
