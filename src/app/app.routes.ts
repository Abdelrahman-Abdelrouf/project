import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
  {path:'', component:Home ,title:'home'},
  {path:'about', component:About ,title:'about'},
  {path:'portfolio', component:Portfolio ,title:'portfolio'},
  {path:'contact', component:Contact ,title:'contact'},
  {path:'**', component:Notfound ,title:'notfound'}
];
