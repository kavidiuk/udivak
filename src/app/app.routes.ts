import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { ImpostazioniprofiloComponent } from './profiloUtente/impostazioniprofilo/impostazioniprofilo.component';
import { ProfiloComponent } from './profiloUtente/profilo/profilo.component';
import { LoginComponent } from './registrazione/login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione/registrazione.component';
import { HomeComponent } from './profiloUtente/home/home.component';
import { CercaComponent } from './cerca/cerca.component';
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
        path:'home',
        component: HomeComponent
    },
    {
        path:'cerca',
        component: CercaComponent
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
