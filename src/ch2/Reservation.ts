import { Screening } from './Screening';

export class Reservation {
  private customer: Customer;
  private screening: Screening;
  private fee: number;
  private audienceCount: number;

  constructor(
    customer: Customer,
    screening: Screening,
    fee: number,
    audienceCount: number,
  ) {
    this.customer = customer;
    this.screening = screening;
    this.fee = fee;
    this.audienceCount = audienceCount;
  }
}
