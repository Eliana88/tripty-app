import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent {
  constructor(private router: Router) {

  }

  redirigirAlComponenteDelBot() {
    this.router.navigate(['/chatbot']);

  }

}
