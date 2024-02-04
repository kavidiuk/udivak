import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ImpostazioniprofiloComponent } from './profiloUtente/impostazioniprofilo/impostazioniprofilo.component';
import { ProfiloComponent } from './profiloUtente/profilo/profilo.component';
import { LoginComponent } from './registrazione/login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione/registrazione.component';
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
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
