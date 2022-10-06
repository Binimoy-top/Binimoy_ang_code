import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDialogsComponent } from './form-dialogs.component';

describe('FormDialogsComponent', () => {
  let component: FormDialogsComponent;
  let fixture: ComponentFixture<FormDialogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDialogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
