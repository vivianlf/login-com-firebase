import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component'; 
import { EditarTarefaComponent } from './editar/editar-tarefa.component';
import { FavoritarTarefaComponent } from './favoritar/favoritar-tarefa.component';
import { ConcluirTarefaComponent } from './concluir/concluir-tarefa.component';
import { ExcluirTarefaComponent } from './excluir/excluir-tarefa.component';


export const TarefaRoutes: Routes = [
	{ 
		path: 'tarefas', 
		redirectTo: 'tarefas/listar' 
	},
	{ 
		path: 'tarefas/listar', 
		component: ListarTarefaComponent
	}, 
	{ 
		path: 'tarefas/cadastrar', 
		component: CadastrarTarefaComponent
	},
	{ 
		path: 'tarefas/editar/:id', 
		component: EditarTarefaComponent
	},
	{ 
		path: 'tarefas/favoritar', 
		component: FavoritarTarefaComponent
	},
	{ 
		path: 'tarefas/favoritar/:id', 
		component: FavoritarTarefaComponent
	},
	{ 
		path: 'tarefas/concluir', 
		component: ConcluirTarefaComponent
	},
	{ 
		path: 'tarefas/excluir/:id', 
		component: ExcluirTarefaComponent
	},	
	{ 
		path: 'tarefas/excluir', 
		component: ExcluirTarefaComponent
	}
];