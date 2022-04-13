import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent implements OnInit {

  logForm = this.fb.group({
    Email: ['', [Validators.required, Validators.pattern]],
    Password: ['', [Validators.required, Validators.minLength(8)]]

  })

  onSubmit() {
    alert("Welcome back " + this.logForm.controls['Email'].value);
    console.warn(this.logForm.value);
  }

  errorAlertEmail(){
    return this.logForm.controls['Email'].invalid && this.logForm.controls['Email'].hasError('required') && (this.logForm.controls['Email'].dirty || this.logForm.controls['Email'].touched) ? "Email is required" : 
    this.logForm.controls['Email'].hasError('pattern') ? 'Invalid Email Address' : '' 
  }

  errorAlertPass(){
    return this.logForm.controls['Password'].invalid && this.logForm.controls['Password'].hasError('required') && (this.logForm.controls['Password'].dirty || this.logForm.controls['Password'].touched) ? "Password is required" : this.logForm.controls['Password'].hasError('minlength') ? 'Password must be at least 8 characters' : ''
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
