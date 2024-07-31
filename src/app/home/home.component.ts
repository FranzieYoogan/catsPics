import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private http: HttpClient) {}
  data:any


  generate() {

    const cat:any = document.getElementById('cat')
   cat.style.opacity = "0"

      this.http.get('https://api.thecatapi.com/v1/images/search?limit=5').subscribe(config => {

        console.log(config)
        this.data = config
  
      });
      
      localStorage.setItem('exist','exist')

    setTimeout(() => {

      cat.style.transition = "0.5s"
      cat.style.rotate = "5deg"
      cat.style.opacity = "1"
      
    }, 2500);



    setTimeout(() => {

      cat.style.transition = "0.5s"
      cat.style.rotate = "0deg"


    }, 2800);

  }

}
