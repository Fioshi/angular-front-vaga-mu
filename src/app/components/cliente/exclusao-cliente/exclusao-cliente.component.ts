import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exclusao-cliente',
  standalone: true,
  imports: [],
  templateUrl: './exclusao-cliente.component.html',
  styleUrl: './exclusao-cliente.component.css'
})
export class ExclusaoClienteComponent implements OnInit {
  clienteId?: number;
  cliente?: any; 

  constructor(
    private route: ActivatedRoute,
    private service: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); 

      if (id) {
        this.clienteId = Number(id);

        if (!isNaN(this.clienteId)) {
          this.service.buscarPorId(this.clienteId).subscribe(cliente => {
            this.cliente = cliente;
          });
        } else {
          console.error('ID inválido!');
        }
      } else {
        console.error('ID não encontrado na URL!');
      }
    });
  }

  excluir(): void {
    if (this.clienteId) {
      this.service.excluir(this.clienteId).subscribe(() => {
        this.router.navigate(['/listarCliente']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/listarCliente']); 
  }
}