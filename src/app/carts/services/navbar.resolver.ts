import { ResolveFn } from '@angular/router';

export const navbarResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
