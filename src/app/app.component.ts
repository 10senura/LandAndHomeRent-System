import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerLandingComponent } from "./page/customer-landing/customer-landing.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomerLandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LandAndHomeRent-System';
}
