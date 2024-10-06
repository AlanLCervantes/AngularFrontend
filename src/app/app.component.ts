import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  conocerMas(){
    alert("Conocer más")
  }  
  
  adoptar(){
    alert("Adoptar")
  }

  comprarSIM(){
    alert("Comprar SIM")
  }
}
