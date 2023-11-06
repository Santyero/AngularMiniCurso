import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaFisicaComponent } from './screens/pessoa-fisica/pessoa-fisica.component';
import { PessoaJuridicaComponent } from './screens/pessoa-juridica/pessoa-juridica.component';

const routes: Routes = [
  { path: 'pessoa-fisica', component: PessoaFisicaComponent },
  { path: 'pessoa-juridica', component: PessoaJuridicaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
