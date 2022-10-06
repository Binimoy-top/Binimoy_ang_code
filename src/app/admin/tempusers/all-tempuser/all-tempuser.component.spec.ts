import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTempuserComponent } from './all-tempuser.component';

describe('AllTempuserComponent', () => {
  let component: AllTempuserComponent;
  let fixture: ComponentFixture<AllTempuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTempuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTempuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
