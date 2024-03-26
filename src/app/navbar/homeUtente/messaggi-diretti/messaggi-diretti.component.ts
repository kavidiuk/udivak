import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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

  ngOnInit(): void {  }

  addPost(event: Event): void {
    event.preventDefault();
    const title = (<HTMLInputElement>document.getElementById('testo'))?.value;
    const postElement = document.createElement('div');
    postElement.className = 'card mt-3';
    postElement.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
        </div>
    `;
    const postContainer = document.getElementById('postContainer');
    if (postContainer) {
        postContainer.appendChild(postElement);
    }
}
}