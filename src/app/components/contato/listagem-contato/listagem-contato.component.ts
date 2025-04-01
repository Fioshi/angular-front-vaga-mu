import { Component } from '@angular/core';
import { Contato } from '../contato';
import { ContatoService } from '../contato.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-listagem-contato',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listagem-contato.component.html',
  styleUrl: './listagem-contato.component.css'
})
export class ListagemContatoComponent {


  contatos: Contato[] = [];
  clienteId: number = 0;

  constructor(
    private service: ContatoService,
    private route: ActivatedRoute,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clienteId = +params['id'];
      this.listar(); 
    });
  }

  goToCadastroContato() {
    this.router.navigate(['/cadastrarContato', this.clienteId]);
  }

  listar() {
    this.service.listarContatosPorCliente(this.clienteId).subscribe((item) => {
      this.contatos = item;
    });
  }
}
