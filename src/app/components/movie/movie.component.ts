import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
movie:Movie;
public details: boolean = false;
  constructor(

    private movieService:MoviesService,
    private activaterouted:ActivatedRoute,
    private router:Router


  ) { }

  ngOnInit(): void {
   
    const identifier = this.activaterouted.snapshot.paramMap.get('id');


    console.log(identifier);

    this.movieService.getMovieById(identifier).subscribe((movie) => {


      if(!movie){

        this.router.navigateByUrl('/');

      }


      this.movie = movie;
      console.log('Image --> ',this.movie);

    });

  }


  changeDetails(event: Event){


    if(this.details == false){

      this.details = true;

      console.log(this.details);
    }else{


      this.details = false;


    }

    


  }





}
