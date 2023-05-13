import { Audience } from './Audience';
import { Ticket } from './Ticket';

export class TicketOffice {
  private amount: number;
  private tickets: Ticket[];

  constructor(amount: number, tickets: Ticket[]) {
    this.amount = amount;
    this.tickets = tickets;
  }

  sellTicketTo(audience: Audience) {
    this.plusAmount(audience.buy(this.getTicket()));
  }

  getTicket(): Ticket {
    return this.tickets[0];
  }

  plusAmount(amount: number) {
    this.amount += amount;
  }
}
