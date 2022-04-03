import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritarTarefaComponent } from './favoritar-tarefa.component';

describe('FavoritarTarefaComponent', () => {
  let component: FavoritarTarefaComponent;
  let fixture: ComponentFixture<FavoritarTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritarTarefaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
