import { Component, OnInit, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-cerca',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cerca.component.html',
  styleUrls: ['./cerca.component.scss']
})
export class CercaComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef){}
  
  ngOnInit(): void {
    this.addRandomPosts();
  }

  generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  addRandomPosts(): void {

    const postContainer = this.el.nativeElement.querySelector('#postContainer');
    if (!postContainer) return;

    const numberOfPosts = this.generateRandomNumber(30, 50);

    for (let i = 0; i < numberOfPosts; i++) {
 
      const postElement = this.renderer.createElement('div');
      this.renderer.addClass(postElement, 'card');
      this.renderer.addClass(postElement, 'mt-3');
      this.renderer.addClass(postElement, 'm-auto');
      this.renderer.addClass(postElement, 'altezza');

      const randomImageUrl = this.getRandomImageUrl();
      const randomName = this.getRandomSurname();
      const RandomText = this.getRandomText();
      postElement.innerHTML = `
      <div class="d-flex">
        <img id="fotoProfilomini" class="mx-2" src="${randomImageUrl}" style="width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin-right: 1rem;
        margin-top: 0.5rem;";
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
    const keywords = ['nature', 'city', 'technology', 'food', 'animals','car','computer','drink'];
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
  // cerca
  // cerca(event:Event): void{
  //   // switch 
  //   event.preventDefault();
  //   this.mostraCard = false;
  //   const cercato = (<HTMLInputElement>document.getElementById('cercato'))?.value;
  //   const postElement = document.createElement('div');
  //   postElement.className = '';
  //   postElement.innerHTML = `
  //   <h1>Ciao funziona</h1>
  //   `;
  //   // const postContainer = document.getElementById('cercato');
  //   const postContainer = this.el.nativeElement.querySelector('#cercato');
  //   if(postContainer){
  //     postContainer.appendChild(postElement);
  //   }
  // }
  addPost(event: Event): void {
    const randomImageProfile = this.getRandomImageUrl();
    for(let i = 0; i < this.generateRandomNumber(10,30) ; i++ ){
    event.preventDefault();
    const nomeCercato = (<HTMLInputElement>document.getElementById('testo'))?.value;
    const randomImageUrl = this.getRandomImageUrl();
    const RandomText = this.getRandomText();
    const postElement = document.createElement('div');
    postElement.innerHTML = `
    <div class="card mt-3 m-auto col-auto" style="width: 18rem;">
    <div class="d-flex">
        <img id="" class="mx-2" src="${randomImageProfile}" style="width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin-right: 1rem;
        margin-top: 0.5rem;";
        <h2 class="mb-0 mt-3">${nomeCercato}</h2>
      </div>
      <hr class="mt-1 mb-0">
     <img src="${randomImageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <i class="far fa-heart mx-2"></i>
        <i class="far fa-comment mx-2"></i>
       <i class="far fa-share-square mx-2"></i>
        <p class="card-text">${RandomText}</p>
      </div>
      </div>
    `;
    const postContainer = document.getElementById('utenteCercato');
    if (postContainer) {
        postContainer.appendChild(postElement);
    }
    const nomeCercatoInput = <HTMLInputElement>document.getElementById('testo');
    if (nomeCercatoInput){nomeCercatoInput.value = ''}
  }
}
}