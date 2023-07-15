import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies = [];
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(){
    this.api.getAllMovies()
  }



}
