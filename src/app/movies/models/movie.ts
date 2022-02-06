export class Movie {
    title: string;
    year: string;
    duration: string;
    info: string;
    pathPoster: string;
    voteAvg: string;
    genres: any;
  
    constructor(title: string, year: string, duration: string, info: string, pathPoster: string, voteAvg: string, genres: any) {
      this.title = title;
      this.year = year;
      this.duration = duration;
      this.info = info;
      this.pathPoster = pathPoster;
      this.genres = genres;
      this.voteAvg = voteAvg;
    }
  }