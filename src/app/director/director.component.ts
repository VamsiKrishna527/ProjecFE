import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})

export class DirectorComponent {

  baseUrl: string = 'https://localhost:7104';
  directors: Director[]=[];

  constructor(http: HttpClient) {

    http.get<Director[]>(this.baseUrl + '/api/Director').subscribe({
      next:result =>{
        this.directors = result;
        console.log('Directors:', this.directors);
      },
      error: error => {
        console.error(error);
      }
      
    });
  }


}

interface Director{
  directorId: number;
  name: string;
  movieslist: string;
}

