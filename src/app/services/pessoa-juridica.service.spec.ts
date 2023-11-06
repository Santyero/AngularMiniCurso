import { TestBed } from '@angular/core/testing';
import { PessoaJuricaService } from './pessoa-juridica.service';

describe('PessoaJuricaService', () => {
  let service: PessoaJuricaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoaJuricaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
