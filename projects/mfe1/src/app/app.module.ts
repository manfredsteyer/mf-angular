import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { SharedLibModule } from 'shared-lib';
import { AuthLibModule } from 'auth-lib';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlightsSearchComponent } from './flights/flights-search/flights-search.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forChild(APP_ROUTES),
    MatSnackBarModule,
    AuthLibModule,
    SharedLibModule,
  ],
  declarations: [
    HomeComponent,
    AppComponent,
    FlightsSearchComponent
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
