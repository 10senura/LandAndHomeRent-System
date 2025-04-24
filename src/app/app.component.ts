import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from "./common/login-page/login-page.component";
import { RegisterPageComponent } from "./common/register-page/register-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginPageComponent, RegisterPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LandAndHomeRent-System';
}
