import { Component, OnInit, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit{
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.addRandomPosts();
  }
  ngAfterViewInit(): void {
    this.addRandomDirect();
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
      this.renderer.addClass(postElement, 'altezza');

      const randomImageUrl = this.getRandomImageUrl();
      const randomName = this.getRandomSurname();
      const RandomText = this.getRandomText();
      postElement.innerHTML = `
      <div class="d-flex">
      <img id="fotoProfilomini" class="mx-2" src="${randomImageUrl}" style='width: 2rem;
      height: 2rem;
      border-radius: 50%;
      margin-right: 1rem;
      margin-top: 0.5rem;' alt="fotoProfilo">
      <h2 class="mb-0 mt-2">${randomName}</h2>
    </div>
    <hr class="mt-1 mb-0">
    <img src="${randomImageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <i class="far fa-heart mx-2"></i>
      <i class="far fa-comment mx-2"></i>
      <i class="far fa-share-square mx-2"></i>
      <p class="card-text">${RandomText}</p>
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
    const text = ['Sei una fonte continua di ispirazione. Continua così! 💪','Che bellissimi ricordi! Grazie per averli condivisi con noi! 🌈','Questa immagine mi ha emozionato. Grazie per condividerla! ❤️','Mi hai fatto venire voglia di viaggiare! Dove è questo paradiso? ✈️','Semplicemente stupendo! Non smettere mai di condividere la tua arte! 📸','Quanta creatività in questa foto! Mi ispira tantissimo! 🎨','Adoro il tuo stile! Sempre alla moda! 💃', 'Non riesco a credere quanto sia bello questo posto! 🌟', 'Wow, questa foto è davvero mozzafiato! 😍', 'Wow, questa foto è davvero mozzafiato! 😍']
    const randomText = text[Math.floor(Math.random()*text.length)];
    return `${randomText}`;
  }
  
  getRandomSurname(): String {
    const text = ['Francesco', 'Denis', 'Samy', 'Andrea','Clenildo','Artur','Ilias','Harshpreet','Cristian','Moumine']
    const randomText = text[Math.floor(Math.random()*text.length)];
    return `${randomText}`;
  }

  addRandomDirect(): void {

    const postContainer = this.el.nativeElement.querySelector('#randDirect');
    if (!postContainer) return;

    const numberOfPosts = this.generateRandomNumber(3, 10);

    for (let i = 0; i < numberOfPosts; i++) {

      const postElement = this.renderer.createElement('div');
      postElement.innerHTML = `
      <a routerLink="/messaggiDiretti">
      <div class="d-flex">
        <li><img style="width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin-right: 1rem;
        margin-top: 0.5rem;" src="https://images.unsplash.com/photo-1706818033281-99b8289e0354?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""></li>
        <h4 class="mt-2">Nome Utente</h4>
      </div>
    </a>
      `
      postContainer.appendChild(postElement);
    }
  }
}