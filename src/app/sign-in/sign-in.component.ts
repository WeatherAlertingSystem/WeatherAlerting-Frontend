import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInService } from './sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private readonly signInService: SignInService
  ) {}

  ngOnInit() {
    this.signInForm = this.fb.group({
      login: ['', Validators.required],
      password: '',
    });
  }

  onSubmit() {
    console.log('hello :>> ');
    const login = this.signInForm.get('login')?.value;
    const password = this.signInForm.get('password')?.value;
    if (!login || !password) return;
    this.signInService.signIn(login, password);
  }
}
