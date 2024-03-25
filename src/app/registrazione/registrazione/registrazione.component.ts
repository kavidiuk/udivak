import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { response } from 'express';//questo
import { ApiTest } from '../../apiTest';// * 
@Component({
  selector: 'app-registrazione',
  standalone: true,
  imports: [RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.scss'
})
// *
export class RegistrazioneComponent {

  nome: String | undefined;
  cognome: String | undefined;
  email: String | undefined;
  username: String | undefined;
  password: String | undefined;
  
  constructor(private apiTest: ApiTest){}
  
  salvaDati(){

    const datiUtenti = {
      nome: this.nome,
      cognome: this.cognome,
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.apiTest.salvaDati(datiUtenti).subscribe(
      (response: any) => {
        console.log('Dati salvati con successo: ', response);
      this.nome = '';
      this.cognome = '';
      this.username = '';
      this.email = '';
      this.password = '';
      },
      (error: any) => {
        console.error('Si è verificato un errore durante il salvataggio dei dati: ', error);
      }
    )
  }
}
