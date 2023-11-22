import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']

})
export class DirectivaComponent {


  constructor(private router: Router) { }

    redirigirAlComponenteDelBot() {
    this.router.navigate(['/chatbot']);
  }

}

