import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { SegurancaModule } from './seguranca/seguranca.module';
import { AuthService } from './seguranca/auth.service';
import { TarefasListagemComponent } from './tarefas/tarefas-listagem/tarefas-listagem.component';
import { TarefasModule } from './tarefas/tarefas.module';
import { LoginFormComponent } from './seguranca/login-form/login-form.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';

const rotas: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'tarefas', component: TarefasListagemComponent },
  { path: 'login', component: LoginFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TarefasListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rotas),
    TableModule,
    ButtonModule,
    TooltipModule,
    TarefasModule,
    SegurancaModule,
    CoreModule,
    SharedModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
