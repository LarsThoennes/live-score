import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextGamesComponent } from './next-games/next-games.component';
import { BundesligaComponent } from './bundesliga/bundesliga.component';
import { BundesligaSecondComponent } from './bundesliga-second/bundesliga-second.component';
import { BundesligaThirdComponent } from './bundesliga-third/bundesliga-third.component';


const routes: Routes = [
  { path: '', component: NextGamesComponent },
  { path: 'NextGamesComponent', component:  NextGamesComponent },
  { path: '1.Bundesliga', component:  BundesligaComponent },
  { path: '2.Bundesliga', component:  BundesligaSecondComponent },
  { path: '3.Bundesliga', component:  BundesligaThirdComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
