import { Audience } from './Audience';
import { TickerSeller } from './TicketSeller';

export class Theater {
  private ticketSeller: TickerSeller;
  constructor(ticketSeller: TickerSeller) {
    this.ticketSeller = ticketSeller;
  }

  enter(audience: Audience) {
    this.ticketSeller.sellTo(audience);
  }
}
