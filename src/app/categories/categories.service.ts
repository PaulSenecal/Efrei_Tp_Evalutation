import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = 'http://localhost:3000/questions';  

  constructor(private http: HttpClient) { }

  getCategories(): Observable<string[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(questions => {
        const categoriesSet = new Set(questions.map(question => question.categorie));
        return Array.from(categoriesSet); 
      })
    );
  }
}
