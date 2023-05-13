import { Bag } from './Bag';
import { Ticket } from './Ticket';

export class Audience {
  private bag: Bag;

  constructor(bag: Bag) {
    this.bag = bag;
  }

  buy(ticket: Ticket) {
    return this.bag.hold(ticket);
  }
}
