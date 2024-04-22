import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NextGamesComponent } from './next-games/next-games.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BundesligaComponent } from './bundesliga/bundesliga.component';
import { BundesligaSecondComponent } from './bundesliga-second/bundesliga-second.component';
import { BundesligaThirdComponent } from './bundesliga-third/bundesliga-third.component';
import { MatToolbarComponent } from './mat-toolbar/mat-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NextGamesComponent,
    BundesligaComponent,
    BundesligaSecondComponent,
    BundesligaThirdComponent,
    MatToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatTooltipModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
