import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { createHostListener } from '@angular/compiler/src/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  login() {
    // login method returns observable, and we subscribes observable
    this.authService.login(this.model).subscribe(
      next => {
        this.alertify.success('logged in sucessful');
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  // this method is for *ngif in template to show status of user
  loggedIn() {
    return this.authService.loggedIn();
  }

  loggedOut() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }
}
