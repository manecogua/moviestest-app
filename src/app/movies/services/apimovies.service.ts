import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {

  private API_URL = "https://api.themoviedb.org/3";
  //private API_URL = "http://localhost:3001/";
  private API_KEY = "api_key=195b9abb1ddcb68670fd80f7560a3b40";

  constructor(private httpClient: HttpClient) { }

  public getMovies(){  
		return this.httpClient.get<any>(this.API_URL+'/movie/top_rated?'+this.API_KEY);  
	}

  public getMovie(id : string) : Observable<Movie>{  
		return this.httpClient.get<Movie>(this.API_URL+'/movie/'+id+'?'+this.API_KEY);  
	}

}
