import { TestBed } from '@angular/core/testing';

import { ConsultarCnpjService } from './consultar-cnpj.service';

describe('ConsultarCnpjService', () => {
  let service: ConsultarCnpjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarCnpjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
