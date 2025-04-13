import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerLandingComponent } from "./page/customer-landing/customer-landing.component";
import { LandingPageComponent } from "./common/landing-page/landing-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomerLandingComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LandAndHomeRent-System';
}
