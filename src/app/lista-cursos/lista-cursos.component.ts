import { Component} from '@angular/core';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent {

  dadosCurso = [
    {
      curso:"MySQL",
      cargaHoraria: "80 horas"
    },
    {
      curso:"PHP",
      cargaHoraria: "120 horas"
    },
    {
      curso:"Linguagem C",
      cargaHoraria: "120 horas"
    },
    {
      curso:"Angular",
      cargaHoraria: "80 horas"
    },
  ]

}
