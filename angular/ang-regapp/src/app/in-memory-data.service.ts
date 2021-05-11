import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Data, registration } from './data';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const credentials = [{ username: 'qwerty999', password: 'qwerty999' }];

    const regs = [
      {
        name: 'Tanja Koivunen',
        email: 'tanja@iki.fi',
        food: 'kala',
        sauna: 'joo',
      },
    ];

    return { credentials, regs };
  }
}
