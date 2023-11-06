import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaFisicaComponent } from './screens/pessoa-fisica/pessoa-fisica.component';
import { PessoaJuridicaComponent } from './screens/pessoa-juridica/pessoa-juridica.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { PessoaFisicaService } from '@services/pessoa-fisica.service';
import { SimpleGenericTableComponent } from './components/simple-generic-table/simple-generic-table.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    PessoaFisicaComponent,
    PessoaJuridicaComponent,
    SimpleGenericTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [PessoaFisicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
