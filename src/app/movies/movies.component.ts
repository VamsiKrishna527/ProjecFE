import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent {
  baseUrl: string = 'https://localhost:7104';
  directors: Director[] = [];
  selectedDirectorName: string | null = null;
  selectedDirector: Director | null = null;
  movies : Movie[]=[];

  constructor(private http: HttpClient) {
    this.loadDirectors();
  }

  loadDirectors() {
    this.http.get<Director[]>(this.baseUrl + '/api/Director').subscribe({
      next: result => {
        this.directors = result;
      },
      error: error => {
        console.error(error);
      }
    });
  }

  onDirectorSelected() {
    this.selectedDirector = this.directors.find(director => director.name === this.selectedDirectorName) || null;

    if (this.selectedDirector) {
      this.http.get<Director>(`${this.baseUrl}/api/Director/GetDirectorwithMovies/${this.selectedDirector.directorId}`).subscribe({
        next: result => {
          this.selectedDirector = result;
          this.movies = result.movies;
          console.log('Director with Movies:', result);
        },
        error: error => {
          console.error(error);
        }
      });
    }
  }
}

interface Director {
  directorId: number;
  name: string;
  age: number;
  nationality: string;
  email:string;
  movies : Movie[];
  movieslist: string;
}

interface Movie{
  title: string;
  description: string;
  releaseDate: Date;
  budget: number;
  genre: string;
  collections: number;
  
}