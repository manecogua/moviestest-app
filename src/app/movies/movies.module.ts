import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';


@NgModule({
  declarations: [MovieComponent, MovieDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [MovieComponent, MovieDetailsComponent]
})
export class MoviesModule { }
