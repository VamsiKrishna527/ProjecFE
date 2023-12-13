import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent {

  baseUrl: string = 'https://localhost:7104';
  directors: Director[] = [];
  selectedOperation: string | null = null;
  selectedDirector: Director | null = null;
  selectedMovieTitle: string | null = null;
  selectedMovieDescription: string | null = null;
  selectedReleaseDate: string | null = null;
  selectedBudget: number | null = null;
  selectedGenre: string | null = null;
  selectedCollections: number | null = null;
  selectedDirectorMovies: string[] = [];

  constructor(private http: HttpClient) {
    this.loadDirectors();
  }

  loadDirectors() {
    this.http.get<Director[]>(`${this.baseUrl}/api/Director`).subscribe({
      next: result => {
        this.directors = result;
      },
      error: error => {
        console.error(error);
      }
    });
  }

  loadMoviesForDirector() {
    if (this.selectedDirector) {
      this.selectedDirectorMovies = this.selectedDirector.movieslist || [];
      console.log('Selected Director Movies:', this.selectedDirectorMovies);
    }
  }

  onOperationChange() {
    console.log('Selected Operation:', this.selectedOperation);
    if (this.selectedOperation === 'update' || this.selectedOperation === 'delete') {
      this.loadMoviesForDirector();
    }
  }

  onDirectorChange() {
    this.loadMoviesForDirector();
  }

  addMovieToDirector() {
    if (this.selectedDirector) {
      const directorId = this.selectedDirector.directorId;

      const postData = {
        title: this.selectedMovieTitle,
        description: this.selectedMovieDescription,
        releaseDate: this.selectedReleaseDate,
        budget: this.selectedBudget,
        genre: this.selectedGenre,
        collections: this.selectedCollections
      };

      this.http.post<any>(`${this.baseUrl}/api/Director/AddMovieToDirector/${directorId}/movies`, postData).subscribe({
        next: result => {
          console.log('Movie added successfully:', result);
        },
        error: error => {
          console.error(error);
        }
      });
    }
  }

  updateMovieofDirector() {
    if (this.selectedDirector && this.selectedMovieTitle) {
      const directorId = this.selectedDirector.directorId;
      const movieId = this.selectedMovieTitle;

      const postData = {
        title: this.selectedMovieTitle,
        description: this.selectedMovieDescription,
        releaseDate: this.selectedReleaseDate,
        budget: this.selectedBudget,
        genre: this.selectedGenre,
        collections: this.selectedCollections
      };

      this.http.put<any>(`${this.baseUrl}/api/Director/UpdateMovieInDirector/${directorId}/${movieId}`, postData).subscribe({
        next: result => {
          console.log('Movie updated successfully:', result);
        },
        error: error => {
          console.error(error);
        }
      });
    }
  }

  deleteMovieofDirector() {
    if (this.selectedDirector && this.selectedMovieTitle) {
      const directorId = this.selectedDirector.directorId;

      this.http.delete<any>(`${this.baseUrl}/api/Director/DeleteMovieFromDirector/${directorId}/${this.selectedMovieTitle}`).subscribe({
        next: result => {
          console.log('Movie deleted successfully:', result);
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
  email: string;
  movieslist: string[];
}
