import { TestBed } from '@angular/core/testing';

import { AddAssetService } from './add-asset.service';

describe('AddAssetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddAssetService = TestBed.get(AddAssetService);
    expect(service).toBeTruthy();
  });
});
