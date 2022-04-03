import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcluirTarefaComponent } from './concluir-tarefa.component';

describe('ConcluirTarefaComponent', () => {
  let component: ConcluirTarefaComponent;
  let fixture: ComponentFixture<ConcluirTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcluirTarefaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcluirTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
