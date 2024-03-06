import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-messaggi-diretti',
  standalone: true,
  imports: [],
  templateUrl: './messaggi-diretti.component.html',
  styleUrl: './messaggi-diretti.component.scss'
})
export class MessaggiDirettiComponent {

  constructor(private location: Location){}
  goBack(){
    this.location.back();
  }

}
