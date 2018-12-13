import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor() {}

  ngOnInit() {}

  register() {
    console.log(this.model);
  }

  cancel() {
    // emit a false value to stop home page showing register form.
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
