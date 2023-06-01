import { DiscountCondition } from './DiscountCondtion';
import { MovieType } from './MovieType';

export class Movie {
  private title: string;
  private runningTime: number;
  private fee: number;
  private discountConditions: DiscountCondition[];

  private movieType: MovieType;
  private discountAmount: number;
  private discountPercent: number;
}
