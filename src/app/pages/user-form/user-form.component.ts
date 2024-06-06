import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  providers: [
    MessageService,
    ConfirmationService
  ]
})
export class UserFormComponent {

  titleForm: string = "Crear cuenta";
  labelAcept!: string;
  labelCancel!: string;
  public user: IUser = new IUser();
  formError: boolean = false;
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
   ) { }

  ngOnInit() {
    this.form = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
    this.accept();
    this.cancel();
  }

  create($event: Event): void {
    this.formError = false;
    if (
      !this.user.nombre ||
      !this.user.apellidoPaterno ||
      !this.user.apellidoMaterno ||
      !this.user.email ||
      this.user.password.length < 8 ||
      !this.user.terminos
    ) {
      this.formError = true;
      let errorMessage = 'Complete el formulario correctamente';
      if (this.user.password && this.user.password.length < 8) {
        errorMessage = 'La contraseña debe tener al menos 8 caracteres';
      }
      if (!this.user.terminos) {
        errorMessage = 'Acepté los términos y condiciones';
      }
      this.messageService.add({ severity: 'error', summary: 'Error', detail: errorMessage });
      return;
    }
    this.authService.createUser(this.user).subscribe({
      next: (jsonResponse) => {
        const successMessage = 'Se creo el usuario con exito. Bienvenido ' + jsonResponse.nombre;
        this.confirmationService.confirm({
          target: event.target as EventTarget,
          message: 'Se ha creado con éxito el usuario!!!',
          header: 'Aviso!!!',
          icon: 'pi pi-exclamation-triangle',
          acceptIcon:"none",
          rejectIcon:"none",
          rejectVisible: false,
          acceptLabel: 'Confirmar👍',
          accept: () => {
              this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: successMessage });
              // this.router.navigate(['home'])
              setTimeout(() => {
                this.router.navigate(['home']);
              }, 3000);
          },
      });
      },
      error: (err) => {
        if (err.status === 500) {
          this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: err });
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error al crear la cuenta' });
        }
      }
    });
  }

  accept() {
    this.labelAcept = "Aceptar"
  }

  cancel() {
    this.labelCancel = "Cancelar"
  }

  cancelar(event: Event) {
      this.confirmationService.confirm({
          target: event.target as EventTarget,
          message: 'Seguro desea cancelar la creación de la cuenta?🏠',
          header: 'Regresar al home',
          icon: 'pi pi-info-circle',
          acceptButtonStyleClass:"p-button-danger p-button-text",
          rejectButtonStyleClass:"p-button-text p-button-text",
          acceptIcon:"none",
          rejectIcon:"none",
          accept: () => {
            this.router.navigate(['home']);
          },
      });
    }

}
