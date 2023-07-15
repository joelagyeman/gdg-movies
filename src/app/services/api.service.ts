import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api: HttpClient) { }

  getAllMovies() {
    return.this.api.get('https://api.themoviedb.org/3/movie/now_playing', {
      Headers: {
        
      }
    })
  }

}
