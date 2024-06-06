import { Component } from '@angular/core';
import { DataExchangeService } from 'src/app/services/dataExchange.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  constructor(
    private dataExchangeService: DataExchangeService
  ) {}

  showDialog() {
    this.dataExchangeService.toggleChatBotStatus();
  }

}
