import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  constructor(private http: HttpClient) {}
  dataSearch:any
  search() {

    const search:any = document.getElementById('search')
    const breedContainer:any = document.getElementById('breedContainer')
    
    if(search.value) {


    
    this.http.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${search.value}`).subscribe(config3 => {

      console.log(config3)
      this.dataSearch = config3

      console.log(this.dataSearch.url)

    });
          search.style.border = "1px solid green"
          breedContainer.style.display = "flex"

  } else {

    search.style.border = "1px solid red"
    breedContainer.style.display = "none"
  }


  }

}
