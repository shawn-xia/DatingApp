import { AuthService } from './../_services/auth.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  register() {
    this.authService.register(this.model).subscribe(
      () => {
        console.log('registration success');
      },
      error => {
        console.log('registration failed');
      }
    );
  }

  cancel() {
    // emit a false value to stop home page showing register form.
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
