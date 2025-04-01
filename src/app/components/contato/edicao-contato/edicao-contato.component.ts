import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContatoService } from '../contato.service';
import { Contato } from '../contato';

@Component({
  selector: 'app-editar-contato',
  templateUrl: './edicao-contato.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
  styleUrls: ['./edicao-contato.component.css']
})
export class EditarContatoComponent implements OnInit {

  contato?: Contato;
  formGroup: FormGroup = new FormGroup({});

  constructor(
    private service: ContatoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      id: ['', Validators.required],
      tipoContato: ['', Validators.required],
      valor: ['', Validators.required],
      observacao: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscaUm(Number(id!)).subscribe((contato) => {
      this.formGroup.patchValue({
        id: contato.id,
        tipoContato: contato.tipoContato,
        valor: contato.valor,
        observacao: contato.observacao
      });
    });
  }

  atualizar(): void {
    if (this.formGroup.valid) {
      this.service.editar(this.formGroup.value).subscribe(() => {
        this.router.navigate(['/listarContatos']);
      });
    } else {
      console.error("Formulário inválido");
    }
  }
}
