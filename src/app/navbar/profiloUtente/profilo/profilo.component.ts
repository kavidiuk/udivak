import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-profilo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './profilo.component.html',
  styleUrl: './profilo.component.scss'
})
export class ProfiloComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // post
   
}

