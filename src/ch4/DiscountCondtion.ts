import { DiscountConditionType } from './DiscountConditionType';

export class DiscountCondition {
  private type: DiscountConditionType; // 할인 조건의 타입

  private sequence: number; // 순번

  private dayOfWeek: number; // 요일
  private startTime: Date; // 시작 시간
  private endTime: Date; // 종료 시간

  // getter / setter

  public getType() {
    return this.type;
  }

  public getDayOfWeek() {
    return this.dayOfWeek;
  }

  public getStartTime() {
    return this.startTime;
  }

  public getEndTime() {
    return this.endTime;
  }

  public getSequence() {
    return this.sequence;
  }
}
