import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  AboutComponent,
  PageNotFoundComponent,
  SettingsComponent,
  SuccessComponent,
  QuizzComponent,
  LearnComponent
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'home', component: HomeComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: 'user', component: SuccessComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'quizz', component: QuizzComponent },
  { path: 'learn', component: LearnComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
