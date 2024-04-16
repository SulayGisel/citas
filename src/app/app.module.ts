import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ListadoArbitroComponent } from './listado-arbitro/listado-arbitro.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistroClienteComponent,
    MenuComponent,
    LoginComponent,
    ListadoArbitroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    mat-form-field
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }