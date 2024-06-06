import { Component, Input } from '@angular/core';

@Component({
  selector: 'access-button',
  templateUrl: './access-button.component.html',
  styleUrls: ['./access-button.component.scss']
})

export class AccessButtonComponent {
  @Input() label: string = "";

}
