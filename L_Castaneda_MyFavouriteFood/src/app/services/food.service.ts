import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentDb } from '../helper-files/contentDb';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getContentArray(): Observable<any[]> {
    return of(contentDb);
  }

  getContentById(id: number): Observable<any> {
    const content = contentDb.find(item => item.id === id);
    return of(content);
  }

}
