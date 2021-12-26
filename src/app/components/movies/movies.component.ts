import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';

import {MatCardHarness} from '@angular/material/card/testing'; 

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] =[];
  public load: boolean;
  constructor(private moviesService:MoviesService) { this.load = false;}

  ngOnInit(): void {


    this.moviesService.getAllmovies().subscribe((movies) => this.movies = movies);

    setTimeout(() => {
      this.load = true;
    }, 5000);


  }








}
