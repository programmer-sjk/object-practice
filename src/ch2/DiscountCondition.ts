import { Screening } from './Screening';

export interface DiscountCondition {
  isSatisfiedBy(screening: Screening): boolean;
}
