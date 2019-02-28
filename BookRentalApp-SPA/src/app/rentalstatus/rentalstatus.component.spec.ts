/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RentalstatusComponent } from './rentalstatus.component';

describe('RentalstatusComponent', () => {
  let component: RentalstatusComponent;
  let fixture: ComponentFixture<RentalstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
