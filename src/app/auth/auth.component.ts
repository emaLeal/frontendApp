import { Component } from '@angular/core';
import { LoginFormComponent } from "../components/form/login/login-form/login-form.component";
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';



@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginFormComponent, CardModule, DividerModule, PasswordModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})

export class AuthComponent {

}
