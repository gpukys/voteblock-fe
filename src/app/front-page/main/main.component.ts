import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  loginForm: FormGroup;

  loginInit = false;

  constructor(
    private fb: FormBuilder,
    private notification: MatSnackBar,
    private router: Router
  ) {
    this.loginForm = fb.group({
      personalCode: ['', Validators.required],
    });
  }

  login() {
    const personalCode = this.loginForm.get('personalCode');
    if (personalCode.value === 'user') {
      localStorage.setItem('role', 'user');
      this.router.navigate(['user/polls']);
    } else if (personalCode.value === 'admin') {
      localStorage.setItem('role', 'admin');
      this.router.navigate(['admin/polls']);
    }
  }

}
