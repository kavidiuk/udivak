import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-messaggi-diretti',
  standalone: true,
  imports: [],
  templateUrl: './messaggi-diretti.component.html',
  styleUrl: './messaggi-diretti.component.scss'
})
export class MessaggiDirettiComponent implements OnInit{

  constructor(private location: Location){}
  goBack(){
    this.location.back();
  }

  ngOnInit(): void { 
   // const randomSruname = this.homeComponent.getRandomSurname();
    // return `randomSruname`;
  }
  addPost(event: Event): void {
    event.preventDefault();
    const title = (<HTMLInputElement>document.getElementById('testo'))?.value;
    const postElement = document.createElement('div');
    postElement.className = '';
    postElement.innerHTML = `
    <div class="float-end m-2 border border-black border-3 rounded-start-5 p-2 bg-success col-7">
            <h3> ${title} </h3>
        </div>
    `;
    const postContainer = document.getElementById('postContainer');
    if (postContainer) {
        postContainer.appendChild(postElement);
    }
  }
}