import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentDb } from '../helper-files/contentDb';
import { Content } from '../helper-files/content-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  MessagesService: any;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
    'application/json' })
    };
    
  //constructor() { }
  constructor(private http: HttpClient) { }

 /*  getContentArray(): Observable<any[]> {
    return of(contentDb);
  } */

  getContentArray() : Observable<Content[]>{
    return this.http.get<Content[]>("api/contents");
  }

  getContentById(id: number): Observable<any> {
    const content = contentDb.find(item => item.id === id);
    return of(content);
  }

  addContent(newContentItem: Content): Observable<Content>{
     // success message
     this.MessagesService.add('Content added successfully.');
    return this.http.post<Content>("api/contents", newContentItem, this.httpOptions);
  }


  updateContent(contentItem: Content): Observable<any>{
    return this.http.put("api/contents", contentItem, this.httpOptions);
  }  

}
