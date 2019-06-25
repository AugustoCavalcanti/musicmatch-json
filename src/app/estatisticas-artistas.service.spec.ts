import { TestBed } from '@angular/core/testing';

import { EstatisticasArtistasService } from './estatisticas-artistas.service';

describe('EstatisticasArtistasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstatisticasArtistasService = TestBed.get(EstatisticasArtistasService);
    expect(service).toBeTruthy();
  });
});
