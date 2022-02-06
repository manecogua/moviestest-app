import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApimoviesserviceService {

  private API_URL = "https://api.themoviedb.org/3";
  private API_KEY = "api_key=195b9abb1ddcb68670fd80f7560a3b40";

  constructor(private httpClient: HttpClient) { }

  public getMovies() : Observable<Response>{  
		return this.httpClient.get<Response>(this.API_URL+'/movie/top_rated?'+this.API_KEY);  
	}
}
