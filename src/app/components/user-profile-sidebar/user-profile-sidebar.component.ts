import { AuthService } from 'src/app/auth/services/auth.service';
import { Component } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { ThemeService } from 'src/app/services/Theme.service';
import { DataExchangeService } from 'src/app/services/dataExchange.service';
import { User } from 'src/app/auth/interfaces/user.interface';
import { timer } from 'rxjs';

@Component({
  selector: 'user-profile-sidebar',
  templateUrl: './user-profile-sidebar.component.html',
  styleUrls: ['./user-profile-sidebar.component.scss'],
  providers: [ MessageService ]
})
export class UserProfileSidebarComponent {
  sidebarVisible: boolean = false;
  userShow: boolean = false;
  visibleLogin: boolean = false;
  labelIngresar: string = "Ingresar cuenta.";
  labelCreate: string = "Crear cuenta."
  isLoggedIn: boolean = true;
  checked: boolean = false;
  selectTheme: string = 'dark';
  messages!: Message[];
  themeNameButton: string = "Modo dark activado";
  user: User;

  constructor (
    private dataExchangeService: DataExchangeService,
    private themeService: ThemeService,
    private messageService: MessageService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.themeService.setTheme(this.selectTheme);
    
    this.hideSlidbar();
    this.dataExchangeService.isLoggedIn$.subscribe(isLoggedIn => {
      this.visibleLogin = isLoggedIn;
    });
    this.userData();
  }

  userData(){
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.authService.getUserId(userId)
        .subscribe({
          next: (user) => {
            this.user = user;
          },
          error: (error) => {
            console.error('Error al obtener los detalles del usuario:', error);
          }
        });
    } else {
      console.error('No se pudo obtener el ID del usuario.');
    }
  }

  logout(): void{
    this.authService.logout();
    this.authService.setLoggedIn(true);
    timer(700).subscribe(() => {
      location.reload();
    });
  }

  hideSlidbar(){
    this.sidebarVisible = false;
  }

  showDialog(){
    this.visibleLogin = true
    this.sidebarVisible = false
  }

  onThemeChange(theme: string): void {
    this.selectTheme = theme;
    this.themeService.setTheme(theme);
    this.showMessage(theme);
  }

  showMessage(theme: string): void {
    const themeName = theme === 'dark' ? 'Modo nocturno' : 'Modo claro';
    this.themeNameButton = `Modo ${this.selectTheme} activado`;
    this.messageService.add({severity:'success', summary:'Modo cambiado', detail: `Se ha cambiado al ${themeName}.`});
  }
}
