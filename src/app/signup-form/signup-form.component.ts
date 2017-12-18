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


  login() {
    // const isValid = authService.login(this.form.value);
    // if (!isValid) {
    //   this.form.setErrors({
    //     inValidLogin: true
    //   });
    // }
    this.form.setErrors({
      inValidLogin: true
    });
  }
  get username() {
    return this.form.get('username');
  }

  ngOnInit() {
  }

}
