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

  public getMovieType() {
    return this.movieType;
  }

  public getFee() {
    return this.fee;
  }

  public getDiscountAmount() {
    return this.discountAmount;
  }

  public getDiscountPercent() {
    return this.discountPercent;
  }

  public getDiscountConditions() {
    return this.discountConditions;
  }
}
