import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AppService, User } from '../../../app.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm: FormGroup;
  isSubmitting: boolean = false;

  constructor(private router: Router, private fb: FormBuilder, private appService: AppService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.isSubmitting = true;
    let usersList: User[] = []
    this.appService.users$.subscribe(users => {
      usersList = users ?? [];
    });

    const user = usersList.find(u => u.email === this.email?.value && u.password === this.password?.value);

    if (!user) {
      this.isSubmitting = false;
      alert('Invalid email or password');
      return;
    }
    setTimeout(() => {
      this.isSubmitting = false;
      console.log('Login success', this.loginForm.value);
      this.appService.setCurrentUser(user);
      this.router.navigate(['/shell']);
    }, 1500);
  }

}
