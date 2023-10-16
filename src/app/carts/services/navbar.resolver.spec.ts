import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { navbarResolver } from './navbar.resolver';

describe('navbarResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => navbarResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
