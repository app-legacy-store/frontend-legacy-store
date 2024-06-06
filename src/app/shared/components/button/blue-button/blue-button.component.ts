import { Component, Input } from '@angular/core';

@Component({
  selector: 'blue-button',
  templateUrl: './blue-button.component.html',
  styleUrls: ['./blue-button.component.scss']
})
export class BlueButtonComponent {

  @Input() label: string = "";

}
