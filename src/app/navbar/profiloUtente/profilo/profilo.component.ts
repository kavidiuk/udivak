import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss'],
})
export class ProfiloComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.addRandomPosts();
  }

  generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  addRandomPosts(): void {
    //const postContainer = document.getElementById('postContainer');
    const postContainer = this.el.nativeElement.querySelector('#postContainer');
    if (!postContainer) return;

    const numberOfPosts = this.generateRandomNumber(3, 10);

    for (let i = 0; i < numberOfPosts; i++) {
      const postElement = document.createElement('div');
      postElement.className = 'col-4 col-sm-3 col-md-2 p-1';
      const randomImageUrl = this.getRandomImageUrl();
      postElement.innerHTML = `
        <div class="col img">
          <img src="${randomImageUrl}" width="100%" alt="">
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
    const text = [
      'ciao a tutti seguitemi nel mio profilo',
      'hello followers',
      'hola chicos',
      'Seguitemi per ulteriori informazioni',
    ];
    const randomText = text[Math.floor(Math.random() * text.length)];
    return `${randomText}`;
  }

  getRandomSurname(): String {
    const text = ['Calciatore', 'Cantante', 'informatico', 'Barista'];
    const randomText = text[Math.floor(Math.random() * text.length)];
    return `${randomText}`;
  }
}
