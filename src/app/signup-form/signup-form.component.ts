import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validator';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor( ) { }

  form = new FormGroup({
    username : new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      UsernameValidators.cannotContainSpace,
    ], UsernameValidators.shouldUnique),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }

  ngOnInit() {
  }

}
