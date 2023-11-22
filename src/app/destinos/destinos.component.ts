import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.css']
})
export class DestinosComponent {
  constructor(private router: Router) {

  }

  redirigirAlComponenteDelBot() {
    this.router.navigate(['/chatbot']);

  }

}
