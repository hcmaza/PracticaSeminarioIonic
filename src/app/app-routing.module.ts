import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'detallepersona/:id', loadChildren: './pages/persona/detallepersona/detallepersona.module#DetallepersonaPageModule' },
  { path: 'listadopersona', loadChildren: './pages/persona/listadopersona/listadopersona.module#ListadopersonaPageModule' },
  { path: 'editarpersona', loadChildren: './pages/persona/editarpersona/editarpersona.module#EditarpersonaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
