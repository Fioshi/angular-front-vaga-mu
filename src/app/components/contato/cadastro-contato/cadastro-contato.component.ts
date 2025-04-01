import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClienteService } from '../../cliente/cliente.service';
import { ContatoService } from '../contato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../cliente/cliente';
import { Contato } from '../contato';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-contato',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-contato.component.html',
  styleUrls: ['./cadastro-contato.component.css']
})
export class CadastroContatoComponent implements OnInit {
  
  clienteId: number = 0;
  formGroup: FormGroup;
  clientes: Cliente[] = [];
  contato: Contato = {
    id: 0,
    idCliente: 0,
    observacao: '',
    tipoContato: '',
    valor: ''
  };

  constructor(
    private serviceCliente: ClienteService,
    private serviceContato: ContatoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formGroup = this.formBuilder.group({
      tipoContato: ['', Validators.required],
      valor: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^\+55\s\d{2}\s\d{5}-\d{4}$/)
      ]]
      ,
      observacao: ['', Validators.maxLength(500)]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.clienteId = +params.get('id')!; 
      this.formGroup.patchValue({
        idCliente: this.clienteId
      });
    });

    this.serviceCliente.listar().subscribe((dados) => {
      this.clientes = dados;
    });
  }

  inserir(): void {
    if (this.formGroup.valid) {
      this.contato = {
        id: 0,
        idCliente: this.clienteId, 
        tipoContato: this.formGroup.value.tipoContato,
        valor: this.formGroup.value.valor,
        observacao: this.formGroup.value.observacao
      };

      this.serviceContato.post(this.contato).subscribe(() => {
        alert("Contato cadastrado com sucesso!");
        this.router.navigate(['/listarCliente']);
      });
    } else {
      console.log('Formulário inválido', this.formGroup);
    }
  }
}
