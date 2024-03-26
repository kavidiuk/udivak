import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.addRandomPosts();
  }

  generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  addRandomPosts(): void {

    const postContainer = this.el.nativeElement.querySelector('#postContainer');
    if (!postContainer) return;

    const numberOfPosts = this.generateRandomNumber(3, 10);

    for (let i = 0; i < numberOfPosts; i++) {
 
      const postElement = this.renderer.createElement('div');
      this.renderer.addClass(postElement, 'spazio');
      this.renderer.addClass(postElement, 'card');
      this.renderer.addClass(postElement, 'mt-3');
      this.renderer.addClass(postElement, 'm-auto');
      this.renderer.addClass(postElement, 'col-auto');

      const randomImageUrl = this.getRandomImageUrl();
      postElement.innerHTML = `
      <div class="d-flex">
      <img id="fotoProfilomini" class="mx-2" src="${randomImageUrl}" style='width: 2rem;
      height: 2rem;
      border-radius: 50%;
      margin-right: 1rem;
      margin-top: 0.5rem;' alt="fotoProfilo">
      <h2 class="mb-0 mt-2">Nome Utente</h2>
    </div>
    <hr class="mt-1 mb-0">
    <img src="${randomImageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <i class="far fa-heart mx-2"></i>
      <i class="far fa-comment mx-2"></i>
      <i class="far fa-share-square mx-2"></i>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
      `;
      postContainer.appendChild(postElement);
    }
  }
  
  getRandomImageUrl(): string {
    const keywords = ['nature', 'city', 'technology', 'food', 'animals'];
    const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
    return `https://source.unsplash.com/800x600/?${randomKeyword}`;
  }
  
  getRandomText(): String {
    const text = ['ciao a tutti seguitemi nel mio profilo', 'hello followers', 'hola chicos', 'Seguitemi per ulteriori informazioni']
    const randomText = text[Math.floor(Math.random()*text.length)];
    return `${randomText}`;
  }
  
  getRandomSurname(): String {
    const text = ['Calciatore', 'Cantante', 'informatico', 'Barista']
    const randomText = text[Math.floor(Math.random()*text.length)];
    return `${randomText}`;
  }
}