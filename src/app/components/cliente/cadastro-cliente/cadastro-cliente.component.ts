import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {
  
  formGroup: FormGroup = new FormGroup({})
  cliente: Cliente = {
    id: 2,
    nome: "",
    cpf: "string",
    dataNascimento: new Date(2000, 0, 1),
    endereco: "string"
  }
  constructor(private service: ClienteService, private formBuilder: FormBuilder, private route: Router) {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern('^\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}$')]], 
      dataNascimento: ['',]
    });
  }

  inserir() {
    this.cliente = {
      id: 2,
      nome: this.formGroup.value.nome,
      cpf: this.formGroup.value.cpf,
      dataNascimento: new Date(this.formGroup.value.dataNascimento),
      endereco: this.formGroup.value.endereco
    };
    
    this.service.post(this.cliente).subscribe(() => {
      alert("Cadastrado com sucesso!");
      this.route.navigate(['/listarCliente']);
    });
  }
}
