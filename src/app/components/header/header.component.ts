import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [], // Importar RouterLink diretamente
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  goToListagem() {
    this.router.navigate(['/listarCliente']);
  }

  goToCadastro(){
    this.router.navigate(['/cadastrarCliente']);
  }
}
