import { Customer } from './Customer';
import { DiscountConditionType } from './DiscountConditionType';
import { MovieType } from './MovieType';
import { Reservation } from './Reservation';
import { Screening } from './Screening';

export class ReservationAgency {
  public reserve(
    screening: Screening,
    customer: Customer,
    audienceCount: number,
  ) {
    const movie = screening.getMovie();
    let discountable = false;
    for (const condition of movie.getDiscountConditions()) {
      if (condition.getType() == DiscountConditionType.PERIOD) {
        discountable =
          screening.getWhenScreened().getDay() == condition.getDayOfWeek() &&
          condition.getStartTime() <= screening.getWhenScreened() &&
          condition.getEndTime() >= screening.getWhenScreened();
      } else {
        discountable = condition.getSequence() == screening.getSequence();
      }

      if (discountable) {
        break;
      }
    }

    let fee;
    if (discountable) {
      let discountAmount = 0;

      switch (movie.getMovieType()) {
        case MovieType.AMOUNT_DISCOUNT:
          discountAmount = movie.getDiscountAmount();
          break;
        case MovieType.PERCENT_DISCOUNT:
          discountAmount = movie.getFee() * movie.getDiscountPercent();
          break;
        case MovieType.NONE_DISCOUNT:
          discountAmount = 0;
          break;
      }

      fee = (movie.getFee() - discountAmount) * audienceCount;
    } else {
      fee = movie.getFee() - audienceCount;
    }

    return new Reservation(customer, screening, fee, audienceCount);
  }
}
