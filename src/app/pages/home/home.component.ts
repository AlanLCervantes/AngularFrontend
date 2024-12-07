import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReqresApiService } from '../../services/reqres-api.service';
  
@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  email: string = '';
  password: string = '';  

  constructor(private apiReqres: ReqresApiService) {}

  login(user: string, password: string) {
    console.log(`User: ${user}, Password: ${password}`);

    this.apiReqres.login(user, password).subscribe(
      (res: any) => { 
        alert("Login successfully: " + res.token);
      },
      (err: any) => { 
        alert(err.error.error);
      }
    );
  }
}
