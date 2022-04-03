import { TestBed } from '@angular/core/testing';
import { DadosService } from './dados.service';


describe('DadosService', () => {
  let service: DadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      providers: [DadosService]
    });
    service = TestBed.inject(DadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
