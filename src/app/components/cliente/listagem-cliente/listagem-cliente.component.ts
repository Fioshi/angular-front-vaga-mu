import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listagem-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listagem-cliente.component.html',
  styleUrl: './listagem-cliente.component.css'
})
export class ListagemClienteComponent {

  clientes: Cliente[] = []
  constructor(private service: ClienteService) { }

  ngOnInit(): void {
    this.listar()
  }

  listar() {
    this.service.listar().subscribe((item) => { 
      this.clientes = item 
    });
  }

}
