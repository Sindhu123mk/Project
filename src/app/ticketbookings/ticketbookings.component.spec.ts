import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketbookingsComponent } from './ticketbookings.component';

describe('TicketbookingsComponent', () => {
  let component: TicketbookingsComponent;
  let fixture: ComponentFixture<TicketbookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketbookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
