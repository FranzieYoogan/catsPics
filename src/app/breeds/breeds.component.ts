import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-breeds',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './breeds.component.html',
  styleUrl: './breeds.component.scss'
})
export class BreedsComponent implements OnInit {

  constructor(private http: HttpClient) {}

  dataBreeds:any

  ngOnInit(): void {

    this.http.get('https://api.thecatapi.com/v1/breeds').subscribe(config2 => {


      this.dataBreeds = config2

      console.log(this.dataBreeds[0].name)

    });

    
  }
  

}
