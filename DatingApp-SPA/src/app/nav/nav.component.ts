import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    // login method returns observable, and we subscribes observable
    this.authService.login(this.model).subscribe(
      next => {
        console.log('logged in sucessful');
      },
      error => {
        console.log('Failed to login');
      }
    );
  }
}