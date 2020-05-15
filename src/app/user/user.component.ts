import { MatSnackBar } from '@angular/material';
import { AuthService, UserRoles, User } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  menuOpened = false;
  user: User;

  rights = {
    [UserRoles.admin]: {
      title: 'Administratorius',
      admin: true,
      requester: false
    },
    [UserRoles.requester]: {
      title: 'Užsakovas',
      admin: false,
      requester: true
    },
    [UserRoles.voter]: {
      title: 'Balsuotojas',
      admin: false,
      requester: false
    }
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private notification: MatSnackBar
    ) { }

  ngOnInit() {
    this.user = this.authService.getUserData();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.notification.open('Sėkmingai atsijungta', undefined, { duration: 3000 });
  }

}
