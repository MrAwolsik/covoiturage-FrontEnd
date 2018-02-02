import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarService } from './car.service';

import { HttpClientModule } from '@angular/common/http';
import { CarCreateComponent } from './car-create/car-create.component'
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'car-list', component: CarListComponent },
  { path: 'car-create', component: CarCreateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarDetailComponent,
    CarCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
