import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTest {
  
  constructor(private httpClient: HttpClient) { }
  
  private apiUrl = 'http://localhost:8080';

  salvaDati(dati:any):Observable<any>{
    return this.httpClient.post<any>(this.apiUrl + '/register', dati);
  }
  
  getSomeData(): Observable<any> {
    const endpoint = '/users'; 
    return this.httpClient.get<any>(this.apiUrl + endpoint);
  }
}
/*
import { HttpClient, HTTP_INTERCEPTORS } from @angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class FetchInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      req = req.clone({
          method: 'GET', // Imposta il metodo sulla richiesta in modo che utilizzi fetch
      });
      return next.handle(req);
  }
}
@NgModule({
    declarations:[
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers:[
    {
        provide: HTTP_INTERCEPTORS,
        useClass: FetchInterceptor,
        multi: true
    }
],
    bootstrap:[AppComponent],
    exports: [RouterModule],
})
export class AppModule {}

export class AppRoutingModule {}
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
*/