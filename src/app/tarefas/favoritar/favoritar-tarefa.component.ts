import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaService } from '../shared/tarefa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritar-tarefa',
  templateUrl: './favoritar-tarefa.component.html',
  styleUrls: ['./favoritar-tarefa.component.css']
})
export class FavoritarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService,
    private router: Router) {}

  ngOnInit() {
  	this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
  	return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
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
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.alterarPrioridade(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    
    }
   
  }

}