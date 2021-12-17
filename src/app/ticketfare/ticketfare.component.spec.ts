import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketfareComponent } from './ticketfare.component';

describe('TicketfareComponent', () => {
  let component: TicketfareComponent;
  let fixture: ComponentFixture<TicketfareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketfareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketfareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
