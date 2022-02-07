import { Component, OnInit } from '@angular/core';
import { ApiMoviesService } from '../../services/apimovies.service';
import { Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie : any;
  constructor(private apiMovieService: ApiMoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const movieId = ''+this.route.snapshot.paramMap.get('id');
    this.apiMovieService.getMovie(movieId)
    .subscribe(
      (data : Movie) => {
        this.movie = {
          id: (data as any).id,
          title: (data as any).title,
          year: (data as any).release_date,
          duration: (data as any).runtime,
          info: (data as any).overview,
          pathPoster: (data as any).poster_path,
          voteAvg: (data as any).vote_average,
          genres: (data as any).genres,
        }
      }
    );
  }

}
