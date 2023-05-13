import { DiscountCondition } from './DiscountCondition';
import { DiscountPolicy } from './DiscountPolicy';
import { Screening } from './Screening';

export class AmountDiscountPolicy extends DiscountPolicy {
  private discountAmount: number;

  constructor(discountAmount: number, conditions: DiscountCondition[]) {
    super(conditions);
    this.discountAmount = discountAmount;
  }

  getDiscountAmount(screening: Screening) {
    return this.discountAmount;
  }
}
