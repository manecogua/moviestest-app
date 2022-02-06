import { Component, OnInit } from '@angular/core';
import { ApiMoviesService } from '../../services/apimovies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies : any = [];
  constructor(private apiMoviesService: ApiMoviesService) { }

  ngOnInit(): void {
    this.apiMoviesService.getMovies()
    .subscribe(
      data => {
        this.movies = {
          data: (data as any).results
        }
      }
    );
  }

}
