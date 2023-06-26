import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(private fb: FormBuilder, private signUpSvc: SignUpService) {}

  ngOnInit() {
    this.signUpForm = this.fb.group({
      login: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
    });
  }

  signUp() {
    const signUpData = this.signUpForm.value;
    console.log('signUpData :>> ', signUpData);
    if (!signUpData.login || !signUpData.email || !signUpData.password) return;
    this.signUpSvc.signUp(
      signUpData.login,
      signUpData.email,
      signUpData.password
    );
  }
}
