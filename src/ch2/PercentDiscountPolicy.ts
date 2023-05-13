import { DiscountCondition } from './DiscountCondition';
import { DiscountPolicy } from './DiscountPolicy';
import { Screening } from './Screening';

export class PercentDiscountPolicy extends DiscountPolicy {
  private percent: number;

  constructor(percent: number, conditions: DiscountCondition[]) {
    super(conditions);
    this.percent = percent;
  }

  getDiscountAmount(screening: Screening) {
    return screening.getMovieFee() * this.percent;
  }
}
