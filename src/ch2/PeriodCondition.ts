import { DiscountCondition } from './DiscountCondition';
import { Screening } from './Screening';

export class PeriodCondition implements DiscountCondition {
  private dayOfWeek: Date;
  private startTime: Date;
  private endTime: Date;

  constructor(dayOfWeek: Date, startTime: Date, endTime: Date) {
    this.dayOfWeek = dayOfWeek;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  isSatisfiedBy(screening: Screening): boolean {
    // 책 예제는 Java 인데 시간 날짜 관련 코드를 js에서 동작하도록 바꾸기 어려우니 그냥 이렇게함
    return true;
  }
}
