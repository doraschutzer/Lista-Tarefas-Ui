import { RouterModule } from '@angular/router';
import { ErrorHandlerService } from './error-handler.service';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AuthService } from '../seguranca/auth.service';
import { NavbarComponent } from './navbar/navbar.component';

import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TarefaService } from '../tarefas/tarefa.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    ToastModule,
    ConfirmDialogModule,
    RouterModule
  ],
  providers: [
    MessageService,
    ConfirmationService,
    AuthService,
    TarefaService,
    ErrorHandlerService,
    { provide : LOCALE_ID, useValue: 'pt-BR' }
  ],
  exports: [
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule
  ]
})
export class CoreModule { }
