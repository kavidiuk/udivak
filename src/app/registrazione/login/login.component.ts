import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiTest } from '../../apiTest';// vedere
import { routes } from '../../app.routes'; // vedere
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
// anche questo
export class LoginComponent {
  constructor(private apiTest: ApiTest) { }


// ngOnInit(): void {
//     this.apiTest.getSomeData().subscribe(data => {
//       console.log(data);
     
//     });
 // }
 
 //da rivedere tutto la parte sotto
 handleButtonClick(){
  this.apiTest.getSomeData().subscribe(data => {
          console.log(data);
         
        });
  
  }
}