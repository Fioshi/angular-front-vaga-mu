import { Routes } from '@angular/router';
import { ListagemClienteComponent } from './components/cliente/listagem-cliente/listagem-cliente.component';
import { CadastroClienteComponent } from './components/cliente/cadastro-cliente/cadastro-cliente.component';
import { ExclusaoClienteComponent } from './components/cliente/exclusao-cliente/exclusao-cliente.component';
import { EditarClienteComponent } from './components/cliente/edicao-cliente/edicao-cliente.component';
import { CadastroContatoComponent } from './components/contato/cadastro-contato/cadastro-contato.component';
import { ListagemContatoComponent } from './components/contato/listagem-contato/listagem-contato.component';
import { ExclusaoContatoComponent } from './components/contato/exclusao-contato/exclusao-contato.component';
import { EditarContatoComponent } from './components/contato/edicao-contato/edicao-contato.component';

export const routes: Routes = [
    {path: "listarCliente", component: ListagemClienteComponent},
    {path: "cadastrarCliente", component: CadastroClienteComponent},
    {path: "excluir/:id", component: ExclusaoClienteComponent},
    {path: "editar/:id", component: EditarClienteComponent},
    {path: "cadastrarContato/:id", component: CadastroContatoComponent},
    {path: "listarContato/:id", component: ListagemContatoComponent},
    {path: "excluirContato/:id", component: ExclusaoContatoComponent},
    {path: "editarContato/:id", component: EditarContatoComponent}
];
