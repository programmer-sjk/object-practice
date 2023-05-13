import { DiscountCondition } from './DiscountCondition';
import { Screening } from './Screening';

export abstract class DiscountPolicy {
  private conditions: DiscountCondition[];

  constructor(conditions: DiscountCondition[]) {
    this.conditions = conditions;
  }

  calculateDiscountAmount(screening: Screening) {
    for (const each of this.conditions) {
      if (each.isSatisfiedBy(screening)) {
        return this.getDiscountAmount(screening);
      }
    }

    return 0;
  }

  abstract getDiscountAmount(screening: Screening);
}
