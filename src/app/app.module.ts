import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient ,HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { NavbarComponent } from './nave bar/navbar/navbar.component';
import { SearchComponent } from './search/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryComponent } from './home/home/country/country.component';
//import { CountryPickerModule } from 'angular2-countrypicker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    /*CountryPickerModule.forRoot({
      baseUrl: 'assets/'
    })*/

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})

export class AppModule {

 }
