import { MessageService } from 'primeng/api';
import { Component } from '@angular/core';
import { envionment } from 'src/environments/environments';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.scss'],
  providers: [MessageService]
})
export class HomeComponent {

  titleHome: string = "Estos son algunos de nuestros productos"
  seeMore: string = "Ver más"
  urlApiImg: string = envionment.urlApiImage;

}
