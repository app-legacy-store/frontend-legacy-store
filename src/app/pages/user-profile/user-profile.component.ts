import { Component } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent {

  titleProfile: string = "Perfil de usuario.";
  labelEdit: string = "Editar perfil";

}
