import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  tarefasUrl = 'http://localhost:8080/tarefas';

  constructor(private http: HttpClient) { }

  listar(): Promise<any> {
    return this.http.get(`${this.tarefasUrl}`)
      .toPromise()
      .then(response => {
        console.log(response);
        return response;
      });
  }
}
