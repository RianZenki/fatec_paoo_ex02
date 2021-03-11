import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cursos: object[] = []

  onAdicionarCurso(curso) {
    this.cursos = [curso, ...this.cursos]
  }
}
