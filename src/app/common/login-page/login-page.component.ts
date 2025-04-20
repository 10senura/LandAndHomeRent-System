import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  isLoggingIn = false;
  loginSuccess = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  ngOnInit() {
    // Set up random window flickering
    setInterval(() => {
      const windows = document.querySelectorAll('.window');
      if (windows.length > 0) {
        const randomWindow = windows[Math.floor(Math.random() * windows.length)] as HTMLElement;
        this.animateWindow(randomWindow);
      }
    }, 2000);
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      // Find invalid controls and shake them
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.get(key);
        if (control?.invalid && (control.dirty || control.touched)) {
          const element = document.getElementById(key) as HTMLElement;
          if (element) {
            this.shakeElement(element);
          }
        }
      });
      return;
    }

    this.isLoggingIn = true;

    // Simulate API call
    setTimeout(() => {
      const userData = {
        email: this.loginForm.value.email,
        rememberMe: this.loginForm.value.rememberMe
      };
      
      console.log('Login attempt:', userData);
      this.loginSuccess = true;
      
      // In a real app, navigate to dashboard
      // this.router.navigate(['/dashboard']);
    }, 1500);
  }

  shakeElement(element: HTMLElement): void {
    element.style.borderColor = '#ff3860';
    element.animate([
      { transform: 'translateX(0)' },
      { transform: 'translateX(-10px)' },
      { transform: 'translateX(10px)' },
      { transform: 'translateX(-10px)' },
      { transform: 'translateX(10px)' },
      { transform: 'translateX(0)' }
    ], {
      duration: 500,
      easing: 'ease-in-out'
    });
    
    setTimeout(() => {
      element.style.borderColor = '#ddd';
    }, 500);
  }

  animateWindow(element: HTMLElement): void {
    element.animate([
      { opacity: 0.8 },
      { opacity: 0.2 },
      { opacity: 0.8 }
    ], {
      duration: 1000,
      easing: 'ease-in-out'
    });
  }

  onFocus(event: FocusEvent) {
    const element = event.target as HTMLElement;
    element.parentElement?.classList.add('focused');
  }

  onBlur(event: FocusEvent) {
    const element = event.target as HTMLElement;
    element.parentElement?.classList.remove('focused');
  }
}