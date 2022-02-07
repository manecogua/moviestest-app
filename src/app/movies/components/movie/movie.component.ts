import { Component, OnInit } from '@angular/core';
import { ApiMoviesService } from '../../services/apimovies.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  originalResource : any = [];
  movies : any = [];
  moviesFiltered : any = [];

  constructor(private apiMoviesService: ApiMoviesService) {}

  ngOnInit(): void {
    this.apiMoviesService.getMovies()
    .subscribe(
      (data : any) => {
        this.movies = this.originalResource = data.results
      }
    );
  }

  filterMovies(event : Event) {
    this.movies = this.originalResource;
    let toSearch = (event.target as HTMLInputElement).value;
    
    this.moviesFiltered = this.movies.filter((movie : any) =>
      movie.title.toLowerCase().indexOf(toSearch.toLowerCase()) > -1
    );
    this.movies = this.moviesFiltered;
  }

}
