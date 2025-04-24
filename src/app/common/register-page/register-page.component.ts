import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
  
  @Component({
    selector: 'app-register-page',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.css']
  })

@Component({
  selector: 'app-register-page',
  imports: [],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent  implements OnInit {
    registrationForm: FormGroup;
    isRegistering = false;
    registrationSuccess = false;
  
    constructor(private fb: FormBuilder) {
      this.registrationForm = this.fb.group({
        fullName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern(/^[0-9\+\-\(\)\s]{10,15}$/)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
        termsAgree: [false, [Validators.requiredTrue]]
      }, { validators: this.passwordMatchValidator });
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
  
    // Custom validator to check if passwords match
    passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');
      
      if (password && confirmPassword && password.value !== confirmPassword.value) {
        return { passwordMismatch: true };
      }
      
      return null;
    }
  
    onSubmit() {
      if (this.registrationForm.invalid) {
        // Find invalid controls and shake them
        Object.keys(this.registrationForm.controls).forEach(key => {
          const control = this.registrationForm.get(key);
          if (control?.invalid && (control.dirty || control.touched)) {
            const element = document.getElementById(key) as HTMLElement;
            if (element) {
              this.shakeElement(element);
            }
          }
        });
        return;
      }
  
      this.isRegistering = true;
  
      // Simulate API call
      setTimeout(() => {
        const userData = {
          fullName: this.registrationForm.value.fullName,
          email: this.registrationForm.value.email,
          phone: this.registrationForm.value.phone
        };
        
        console.log('Registration data:', userData);
        this.registrationSuccess = true;
        
        // In a real app, navigate to login or dashboard
        // this.router.navigate(['/login']);
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

