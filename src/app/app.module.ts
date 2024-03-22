import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ListaAlbunsComponent } from './lista-albuns/lista-albuns.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'

@NgModule({
  declarations: [
    AppComponent,
    ListaAlbunsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HeaderComponent,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
