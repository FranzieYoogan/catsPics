import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  exist:any
  ngOnInit(): void {

    

      this.exist = localStorage.getItem('exist')
    

      if(window.location.pathname == "/") {

        localStorage.clear
      }

  }



}
