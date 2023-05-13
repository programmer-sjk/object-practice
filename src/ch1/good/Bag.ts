import { Invitation } from './Invitation';
import { Ticket } from './Ticket';

export class Bag {
  private amount: number;
  private invitation: Invitation;
  private ticket: Ticket;

  constructor(amount: number, invitation?: Invitation) {
    this.amount = amount;
    this.invitation = invitation;
  }

  hold(ticket: Ticket) {
    if (this.hasInvitation()) {
      this.setTicket(ticket);
      return 0;
    }

    this.setTicket(ticket);
    this.minusAmount(ticket.getFee());
    return ticket.getFee();
  }

  public hasInvitation(): boolean {
    return this.invitation != null;
  }

  public hasTicketO(): boolean {
    return this.ticket != null;
  }

  public setTicket(ticket: Ticket) {
    this.ticket = ticket;
  }

  public minusAmount(amount: number) {
    this.amount -= amount;
  }

  public plusAmount(amount: number) {
    this.amount += amount;
  }
}
