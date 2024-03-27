import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-carica-foto',
  templateUrl: './carica-foto.component.html',
  styleUrls: ['./carica-foto.component.scss']
})
export class CaricaFotoComponent {
  
  constructor( ) {}
  
  addPost(event: Event): void {
    event.preventDefault();

    const title = (<HTMLInputElement>document.getElementById('title'))?.value;
    const content = (<HTMLInputElement>document.getElementById('content'))?.value;
    const url = (<HTMLInputElement>document.getElementById('urls'))?.value;
   
    const postElement = document.createElement('div');
    postElement.className = 'card mt-3';
    postElement.innerHTML = `
        <div class="d-flex">
        <img id="fotoProfilomini" class="mx-2" src="${url}" style='width: 2rem;
          height: 2rem;
          border-radius: 50%;
          margin-right: 1rem;
        margin-top: 0.5rem;' alt="fotoProfilo">
        <h2 class="mb-0 mt-2">${title}</h2>
      </div>
      <hr class="mt-1 mb-0">
     <img src="${url}" class="card-img-top" alt="...">
      <div class="card-body">
        <i class="far fa-heart mx-2"></i>
        <i class="far fa-comment mx-2"></i>
       <i class="far fa-share-square mx-2"></i>
        <p class="card-text">${content}</p>
      </div>
    `;

    const postContainer = document.getElementById('postContainer');
    if (postContainer) {
      postContainer.appendChild(postElement);
    }

    const titleInput = <HTMLInputElement>document.getElementById('title');
    const contentInput = <HTMLInputElement>document.getElementById('content');
    const urlInput = <HTMLInputElement>document.getElementById('urls');

    if (titleInput && contentInput && urlInput) {
      titleInput.value = '';
      contentInput.value = '';
      urlInput.value = '';
    }
  }
}