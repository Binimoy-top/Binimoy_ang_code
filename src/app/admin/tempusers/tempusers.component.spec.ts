import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempusersComponent } from './tempusers.component';

describe('TempusersComponent', () => {
  let component: TempusersComponent;
  let fixture: ComponentFixture<TempusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
