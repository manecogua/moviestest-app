import { Component, OnInit } from '@angular/core';
import { ApiMoviesService } from '../../services/apimovies.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie : any;
  constructor(private apiMovieService: ApiMoviesService) { }

  ngOnInit(): void {
    const movieId = '730154';
    this.apiMovieService.getMovie(movieId)
    .subscribe(
      data => {
        this.movie = new Movie(
          (data as any).title,
          (data as any).release_date,
          (data as any).runtime,
          (data as any).overview,
          (data as any).poster_path,
          (data as any).vote_average,
          (data as any).genres,
        );
      }
    );
  }

}