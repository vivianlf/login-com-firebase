import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared/tarefa.service';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar/editar-tarefa.component';
import { FavoritarTarefaComponent } from './favoritar/favoritar-tarefa.component';
import { ExcluirTarefaComponent } from './excluir/excluir-tarefa.component';
import { ConcluirTarefaComponent } from './concluir/concluir-tarefa.component';
import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive';
import { TarefaFavDirective } from './shared/tarefa-fav.directive';



@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    FavoritarTarefaComponent,
    ExcluirTarefaComponent,
    ConcluirTarefaComponent,
    TarefaConcluidaDirective,
    TarefaFavDirective
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],

  providers:[
    TarefaService
  ]
})
export class TarefasModule { }
