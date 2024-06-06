import { Component } from '@angular/core';
import { DataExchangeService } from 'src/app/services/dataExchange.service';

@Component({
  selector: 'chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent { 
  visible: boolean = false;
  visibleBubble: boolean = true;
  position: string = 'center';
  labelMessage: string = "pi pi-comments"

  constructor(
    private dataExchangeService: DataExchangeService
  ) {}

  ngOnInit(): void {
    this.dataExchangeService.showChatBot$.subscribe((value) => {
      this.visible = value;
    });
  }

  showDialog(position: string) {
    this.position = position;
    this.visible = true;
    this.visibleBubble = true;
  }

  hideDialog() {
    this.visible = false;
  }

  hideBubble() {
    this.visibleBubble = false;
  }
}
