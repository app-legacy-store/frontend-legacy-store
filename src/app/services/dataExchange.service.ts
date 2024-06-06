import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataExchangeService {

  private successMessage: string = '';
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private showChatBotSubject = new BehaviorSubject<boolean>(false);
  showChatBot$ = this.showChatBotSubject.asObservable();

  constructor() {}

  updateLoginStatus(status: boolean) {
    this.isLoggedInSubject.next(status);
  }

  toggleChatBotStatus() {
    this.showChatBotSubject.next(!this.showChatBotSubject.value);
  }

  setSuccessMessage(message: string) {
    this.successMessage = message;
  }

  getSuccessMessage(): string {
    return this.successMessage;
  }

}
