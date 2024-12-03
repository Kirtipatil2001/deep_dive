import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]', //[] is is called and used for property binding in that bracket we can declare an attribute
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
