import { Movie } from './Movie';

export class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreened: Date;

  public getMovie() {
    return this.movie;
  }

  public setMovie(movie: Movie) {
    this.movie = movie;
  }

  public getWhenScreened() {
    return this.whenScreened;
  }

  public setWhenScreened(whenScreened: Date) {
    this.whenScreened = whenScreened;
  }

  public getSequence() {
    return this.sequence;
  }

  public setSequence(sequence: number) {
    this.sequence = sequence;
  }
}
