import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from '../cliente.service'; // Ajuste o caminho conforme necessário
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente'; // Ajuste o caminho conforme necessário
import { CommonModule } from '@angular/common';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-editar-cliente',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edicao-cliente.component.html',
  styleUrls: ['./edicao-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private serviceCliente: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formGroup = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      endereco: ['',],
      cpf: ['', [Validators.required, Validators.pattern('^\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}$')]],
      dataNascimento: ['',]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.serviceCliente.buscarPorId(Number(id)).subscribe((cliente) => {
        this.formGroup.patchValue({
          id: id,
          nome: cliente.nome,
          endereco: cliente.endereco,
          cpf: cliente.cpf,
          dataNascimento: cliente.dataNascimento
        });
      });
    }
  }

  atualizar() {

    console.log(this.formGroup.value.nome)
    console.log(this.formGroup.value.endereco)
    console.log(this.formGroup.value.cpf)
    console.log(this.formGroup.value.dataNascimento)
    if (this.formGroup.valid) {
      console.log('Cliente atualizado!', this.formGroup.value);
      this.serviceCliente.editar(this.formGroup.value).subscribe(() => {
        this.router.navigate(['/listarCliente']);
      });
    } else {
      console.log('Formulário inválido', this.formGroup);
    }
  }
}
