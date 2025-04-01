import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../cliente/cliente.service';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-exclusao-contato',
  standalone: true,
  imports: [],
  templateUrl: './exclusao-contato.component.html',
  styleUrl: './exclusao-contato.component.css'
})
export class ExclusaoContatoComponent {
  contatoId?: number;
  contato?: any; 

  constructor(
    private route: ActivatedRoute,
    private service: ContatoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); 

      if (id) {
        this.contatoId = Number(id);

        if (!isNaN(this.contatoId)) {
          this.service.buscarPorId(this.contatoId).subscribe(cliente => {
            this.contato = cliente;
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
    if (this.contatoId) {
      this.service.excluir(this.contatoId).subscribe(() => {
        this.router.navigate(['/listarCliente']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/listarCliente']); 
  }
}
