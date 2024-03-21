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

  nome: String | undefined;
  cognome: String | undefined;
  email: String | undefined;
  passworld: String | undefined;
  
  constructor(private apiTest: ApiTest){}
  
  salvaDati(){
    const datiUtenti = {
      nome: this.nome,
      cognome: this.cognome,
      email: this.email,
      passworld: this.passworld
    };
    this.apiTest.salvaDati(datiUtenti).subscribe(
      (response: any) => {
        console.log('Dati salvati con successo: ', response);
      this.nome = '';
      this.cognome = '';
      this.email = '';
      this.passworld = '';
      },
      (error: any) => {
        console.error('Si è verificato un errore durante il salvataggio dei dati: ', error);
      }
    )
  }
}
