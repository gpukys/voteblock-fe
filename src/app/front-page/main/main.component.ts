import { AuthService } from './../../auth.service';
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
  loading = false;
  verificationCode;

  authComplete = false;

  constructor(
    private fb: FormBuilder,
    private notification: MatSnackBar,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = fb.group({
      personalCode: ['', [Validators.required, Validators.pattern(/\d{11}/)]],
    });
  }

  login() {
    this.loading = true;
    const personalCode = this.loginForm.get('personalCode');

    this.authService.initSmartIdLogin(personalCode.value).subscribe(res => {
      this.verificationCode = res.verificationCode;
      const interval = setInterval(() => this.authService.pollSmartIdSession(res.sessionId).subscribe(res => {
        if (res.state === 'COMPLETE') {
          this.authComplete = true;
          this.authService.setCredentials(res.subject, res.authToken);
          setTimeout(() => {
            this.router.navigate(['/user/polls']);
          }, 2000);
          clearInterval(interval);
        }
      }, err => {
        clearInterval(interval);
        this.notification.open('Įvyko klaida', undefined, {duration: 3000});
        this.loading = false;
        this.verificationCode = false;
      }), 4000);
    }, err => {
      this.loading = false;
      this.notification.open('Nerastas vartotojas', undefined, {duration: 3000});
    });
  }

}
