import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { GetEmpListService } from './services/get-emp-list.service';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { SharingService } from './services/sharing.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ AuthService, GetEmpListService, SharingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
