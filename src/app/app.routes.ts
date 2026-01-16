
import { Routes } from '@angular/router';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { HomeComponent } from './components/home/home.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { AntesdenavidadComponent } from './antesdenavidad/antesdenavidad.component';
import { ComponenteDia090126Component } from './componente-dia-09-01-26/componente-dia-09-01-26.component';
import { ComponenteDia130126Component } from './componente-dia-13-01-26/componente-dia-13-01-26.component';
import { ComponenteDia140126Component } from './componente-dia-14-01-26/componente-dia-14-01-26.component';
import { ComponenteDia160126Component } from './componente-dia-16-01-26/componente-dia-16-01-26.component';

export const routes: Routes = [
{path:'antesdeNavidad', component:AntesdenavidadComponent},
{path:'componente-9-1-26', component:ComponenteDia090126Component},
{path:'componente-13-1-26', component:ComponenteDia130126Component},
{path:'componente-14-1-26', component:ComponenteDia140126Component},
{path:'componente-16-1-26', component:ComponenteDia160126Component}
]
