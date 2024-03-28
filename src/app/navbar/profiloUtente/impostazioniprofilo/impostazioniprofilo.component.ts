import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-impostazioniprofilo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './impostazioniprofilo.component.html',
  styleUrls: ['./impostazioniprofilo.component.scss'],
})
export class ImpostazioniprofiloComponent {
  // newProfileImageUrl: any;
  profileImageUrl: string =
    'https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  @ViewChild('imageUrlInput') imageUrlInput!: ElementRef;

  changeProfileImage(newImageUrl: string) {
    if (newImageUrl.trim() !== '') {
      this.profileImageUrl = newImageUrl;
      this.imageUrlInput.nativeElement.value = '';
    }
  }
}
