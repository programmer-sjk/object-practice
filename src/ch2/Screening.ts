import { Movie } from './Movie';
import { Reservation } from './Reservation';

export class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreened: Date;

  constructor(movie: Movie, sequence: number, whenScreened: Date) {
    this.movie = movie;
    this.sequence = sequence;
    this.whenScreened = whenScreened;
  }

  reserve(customer: Customer, audienceCount: number) {
    return new Reservation(
      customer,
      this,
      this.calculateFee(audienceCount),
      audienceCount,
    );
  }

  private calculateFee(audienceCount: number) {
    return this.movie.calculateMovieFee(this) * audienceCount;
  }

  public getStartTime() {
    return this.whenScreened;
  }

  public isSequence(sequence: number) {
    return this.sequence === sequence;
  }

  public getMovieFee() {
    return this.movie.getFee();
  }
}
