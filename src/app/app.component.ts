import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { HomeComponent } from './components/home/home.component';
import { PresentacionComponent } from "./components/presentacion/presentacion.component";
import { Dia1212Component } from "./components/dia1212/dia1212.component";
import { AntesdenavidadComponent } from "./antesdenavidad/antesdenavidad.component";
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clases-boostrap-AntonioBarroso';
}
