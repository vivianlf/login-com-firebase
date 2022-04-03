import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaService } from '../shared/tarefa.service';

@Component({
  selector: 'app-concluir-tarefa',
  templateUrl: './concluir-tarefa.component.html',
  styleUrls: ['./concluir-tarefa.component.css']
})
export class ConcluirTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
  	this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
  	return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"permanentemente ?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

  alterarPrioridade(tarefa: Tarefa): void {
    if (confirm('Deseja alterar "' + tarefa.nome + '"para urgente ?')) {
      this.tarefaService.alterarPrioridade(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

}