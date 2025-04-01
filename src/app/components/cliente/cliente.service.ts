import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = "http://localhost:8080/api/cliente"
  constructor(private http: HttpClient) { }

  clientes: Cliente[] = []

  httpHeader = {
    headers: {
      "content-Type": "application/json"
    }
  };

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url) as Observable<Cliente[]>;
  }

  post(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente, this.httpHeader);
  }

  buscarPorId(id: number): Observable<Cliente> {
    const url = `${this.url}/${id}`;
    return this.http.get(url) as Observable<Cliente>;
  }

  excluir(id: number) {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }

  editar(cliente: Cliente): Observable<Cliente> {
    return this.http.patch<Cliente>(`${this.url}/${cliente.id}`, cliente, this.httpHeader);
  }
}
