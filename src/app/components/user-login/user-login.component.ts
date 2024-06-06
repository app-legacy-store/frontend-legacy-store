import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Component } from '@angular/core';
import { DataExchangeService } from '../../services/dataExchange.service';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  labelIniciar: string = "Iniciar"
  labelCancelar: string = "Cancelar"
  // modalLogin: boolean = false;
  booleanValue: boolean;
  email: string;
  password: string;


  constructor (
    private dataExchangeService: DataExchangeService,
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  login() {
    this.authService.login({ email: this.email, password: this.password })
      .subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Bienvendido', detail: '' });
          this.dataExchangeService.updateLoginStatus(false);
          this.authService.setLoggedIn(false);
        },
        error: (error) => {
          if (error.status === 401) {
            this.messageService.add({ severity: 'error', summary: 'Error de autenticación', detail: 'Correo electrónico o contraseña incorrectos.' });
          } else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Se produjo un error al iniciar sesión. Inténtalo de nuevo más tarde.' });
          }
        }
      });
    }
  
    createAccount() {
    this.dataExchangeService.updateLoginStatus(false);
  }
}
