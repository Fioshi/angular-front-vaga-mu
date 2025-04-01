import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contato } from './contato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

 private url = "http://localhost:8080/api/contato"
  constructor(private http: HttpClient) { }

  contatos: Contato[] = []

  httpHeader = {
    headers: {
      "content-Type": "application/json"
    }
  };

  listar(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.url) as Observable<Contato[]>;
  }

  post(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.url, contato, this.httpHeader);
  }

  buscarPorId(id: number): Observable<Contato> {
    const url = `${this.url}/${id}`;
    return this.http.get(url) as Observable<Contato>;
  }

  buscaUm(id: number) {
    const url = `${this.url}/busca/${id}`;
    return this.http.get(url) as Observable<Contato>;
  }

  excluir(id: number) {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }

  editar(contato: Contato): Observable<Contato> {
    return this.http.patch<Contato>(`${this.url}/${contato.id}`, contato, this.httpHeader);
  }

  listarContatosPorCliente(clienteId: number): Observable<Contato[]> {
    return this.http.get<Contato[]>(`${this.url}/${clienteId}`);
  }
}
