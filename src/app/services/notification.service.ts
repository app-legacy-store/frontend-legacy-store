import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private successMessageSubject = new Subject<string>();

  constructor() { }

  setSuccessMessage(message: string) {
    this.successMessageSubject.next(message);
  }

  getSuccessMessage(): Subject<string> {
    return this.successMessageSubject;
  }
  
}
