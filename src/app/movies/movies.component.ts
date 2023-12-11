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
      this.loadMoviesForDirector(this.selectedDirector.directorId);
    }
  }

  loadMoviesForDirector(directorId: number) {
    this.http.get<Movie[]>(`${this.baseUrl}/api/Director/${directorId}/movies`).subscribe({
      next: result => {
        console.log('Movies for director:', result);
      },
      error: error => {
        console.error(error);
      }
    });
  }
}

interface Director {
  directorId: number;
  name: string;
  age: number;
  nationality: string;
  movieslist: string;
}

interface Movie{
  
}