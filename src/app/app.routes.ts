
import { Routes } from '@angular/router';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { HomeComponent } from './components/home/home.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { AntesdenavidadComponent } from './antesdenavidad/antesdenavidad.component';
import { ComponenteDia090126Component } from './componente-dia-09-01-26/componente-dia-09-01-26.component';

export const routes: Routes = [
{path:'antesdeNavidad', component:AntesdenavidadComponent},
{path:'componente-9-1-26', component:ComponenteDia090126Component}
];
