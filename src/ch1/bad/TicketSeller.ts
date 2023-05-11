import { TicketOffice } from './TicketOffice';

export class TickerSeller {
  private ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.ticketOffice = ticketOffice;
  }

  getTicketOffice(): TicketOffice {
    return this.ticketOffice;
  }
}
