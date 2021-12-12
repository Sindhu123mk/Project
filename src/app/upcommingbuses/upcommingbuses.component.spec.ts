import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingbusesComponent } from './upcommingbuses.component';

describe('UpcommingbusesComponent', () => {
  let component: UpcommingbusesComponent;
  let fixture: ComponentFixture<UpcommingbusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcommingbusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcommingbusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
