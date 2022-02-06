import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MovieComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'movies', component: MovieComponent},
      {path: 'movie-detail/:id', component: MovieDetailsComponent},
    ]),
  ],
  exports: [MovieComponent, MovieDetailsComponent]
})
export class MoviesModule { }
