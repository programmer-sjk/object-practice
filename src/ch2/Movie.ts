import { DiscountPolicy } from './DiscountPolicy';
import { Screening } from './Screening';

export class Movie {
  private title: string;
  private runningTime: number;
  private fee: number;
  private discountPolicy: DiscountPolicy;

  constructor(
    title: string,
    runningTime: number,
    fee: number,
    discountPolicy: DiscountPolicy,
  ) {
    this.title = title;
    this.runningTime = runningTime;
    this.fee = fee;
    this.discountPolicy = discountPolicy;
  }

  getFee() {
    return this.fee;
  }

  calculateMovieFee(screening: Screening) {
    return this.fee - this.discountPolicy.calculateDiscountAmount(screening);
  }
}
