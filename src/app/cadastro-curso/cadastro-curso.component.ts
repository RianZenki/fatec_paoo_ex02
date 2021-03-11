import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro-curso',
  templateUrl: './cadastro-curso.component.html',
  styleUrls: ['./cadastro-curso.component.css']
})
export class CadastroCursoComponent{

  @Output() adicionarCurso = new EventEmitter()

  adicionar(nome: String, cargaHoraria: String) {
    const curso = {nome, cargaHoraria}
    this.adicionarCurso.emit(curso)

  }

}
