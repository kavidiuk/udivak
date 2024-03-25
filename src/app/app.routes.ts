import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';// da rivedere
import { AppComponent } from './app.component';//da rivedere
import { ImpostazioniprofiloComponent } from './navbar/profiloUtente/impostazioniprofilo/impostazioniprofilo.component';
import { ProfiloComponent } from './navbar/profiloUtente/profilo/profilo.component';
import { LoginComponent } from './registrazione/login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione/registrazione.component';
import { HomeComponent } from './navbar/homeUtente/home/home.component';
import { CercaComponent } from './navbar/cerca/cerca.component';
import { MessaggiDirettiComponent } from './navbar/homeUtente/messaggi-diretti/messaggi-diretti.component';
import { CaricaFotoComponent } from './navbar/carica-foto/carica-foto.component';

export const routes: Routes = [
    {
        path: '',
        component: RegistrazioneComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'profiloUtente',
        component: ProfiloComponent
    },
    {
        path:'impostazioniProfilo',
        component: ImpostazioniprofiloComponent
    },
    {
        path:'cerca',
        component: CercaComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'messaggiDiretti',
        component: MessaggiDirettiComponent
    },
    {
        path:'caricaFoto',
        component: CaricaFotoComponent
    }
];
@NgModule({
    //declarations:[],
    imports: [RouterModule.forRoot(routes)],
    //providers:[],
    //bootstrap:[],
    exports: [RouterModule],
})
export class AppRoutingModule {}
//export class AppModule {}
