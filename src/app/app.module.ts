import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    ListaCursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
