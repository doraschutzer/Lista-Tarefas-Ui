import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-tarefas-listagem',
  templateUrl: './tarefas-listagem.component.html',
  styleUrls: ['./tarefas-listagem.component.css']
})
export class TarefasListagemComponent implements OnInit {

  tarefas = [];

  constructor(
    private tarefaService: TarefaService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.tarefaService.listar()
    .then(resultado => {
      this.tarefas = resultado;
    });
  }

}
