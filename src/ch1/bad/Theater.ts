import { Audience } from './Audience';
import { TickerSeller } from './TicketSeller';

export class Theater {
  private ticketSeller: TickerSeller;
  constructor(ticketSeller: TickerSeller) {
    this.ticketSeller = ticketSeller;
  }

  enter(audience: Audience) {
    if (audience.getBag().hasInvitation()) {
      const ticket = this.ticketSeller.getTicketOffice().getTicket();
      audience.getBag().setTicket(ticket);
    } else {
      const ticket = this.ticketSeller.getTicketOffice().getTicket();
      audience.getBag().minusAmount(ticket.getFee());
      this.ticketSeller.getTicketOffice().plusAmount(ticket.getFee());
      audience.getBag().setTicket(ticket);
    }
  }
}
