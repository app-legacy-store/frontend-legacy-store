import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'deny-button',
  templateUrl: './deny-button.component.html',
  styleUrls: ['./deny-button.component.scss'],
})
export class DenyButtonComponent {
  @Input() label: string = "";
  
 }
