import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { response } from 'express';//questo
import { ApiTest } from '../../apiTest';// *
@Component({
  selector: 'app-registrazione',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.scss'
})
// *
export class RegistrazioneComponent {

}
