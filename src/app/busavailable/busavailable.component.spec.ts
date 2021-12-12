import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusavailableComponent } from './busavailable.component';

describe('BusavailableComponent', () => {
  let component: BusavailableComponent;
  let fixture: ComponentFixture<BusavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusavailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
