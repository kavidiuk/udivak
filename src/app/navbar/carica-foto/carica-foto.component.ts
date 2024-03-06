import { Component } from '@angular/core';

@Component({
  selector: 'app-carica-foto',
  templateUrl: './carica-foto.component.html',
  styleUrls: ['./carica-foto.component.scss']
})
export class CaricaFotoComponent {

  constructor() {}

  addPost(event: Event): void {
    event.preventDefault();

    // Get values from form
    const title = (<HTMLInputElement>document.getElementById('title'))?.value;
    const content = (<HTMLInputElement>document.getElementById('content'))?.value;

    // Create a new post element
    const postElement = document.createElement('div');
    postElement.className = 'card mt-3';
    postElement.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${content}</p>
        </div>
    `;

    // Append the new post to the container
    const postContainer = document.getElementById('postContainer');
    if (postContainer) {
      postContainer.appendChild(postElement);
    }

    // Clear the form
    const titleInput = <HTMLInputElement>document.getElementById('title');
    const contentInput = <HTMLInputElement>document.getElementById('content');

    if (titleInput && contentInput) {
      titleInput.value = '';
      contentInput.value = '';
    }
  }

}
