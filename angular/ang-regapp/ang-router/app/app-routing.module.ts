import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { OtherComponent } from './other';
import { ErrorComponent } from './error';
import { LoginGuard } from './guards/login.guard';
// sovelluksen reitit
// huomaa että other-reitti on suojattu guardilla ja extralazy -reitissä on lazy loading

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'other/:id', component: OtherComponent, canActivate: [LoginGuard] },
  // lazy -tyyppinen moduuli ladataan vain silloin kun sitä tarvitaan eli klikataan linkkiä
    { path: 'extralazy', loadChildren : () => import('./extralazy.module').then(m => m.ExtralazyModule) },
    { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
