import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroClienteComponent } from "./components/cliente/cadastro-cliente/cadastro-cliente.component";
import { CadastroContatoComponent } from "./components/contato/cadastro-contato/cadastro-contato.component";
import { ListagemClienteComponent } from "./components/cliente/listagem-cliente/listagem-cliente.component";
import { HeaderComponent } from './components/header/header.component';
import { EditarClienteComponent } from './components/cliente/edicao-cliente/edicao-cliente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_front_muralis';
}
