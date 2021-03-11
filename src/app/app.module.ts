import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { CadastroCursoComponent } from './cadastro-curso/cadastro-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    ListaCursosComponent,
    CadastroCursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
