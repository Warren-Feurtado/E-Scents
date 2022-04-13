import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {


  regForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    userName: ['', [Validators.required, Validators.minLength(5)]],
    Email: ['', [Validators.required, Validators.pattern]],
    Password: ['', [Validators.required, Validators.minLength(8)]],
    PassConfirm: ['', [Validators.required]], 
  }, {
        validators: this.passConfirmCheck('Password', 'PassConfirm')

  });


  errorAlertFirstName(){
    return this.regForm.controls['firstName'].invalid && this.regForm.controls['firstName'].hasError('required') && (this.regForm.controls['firstName'].dirty || this.regForm.controls['firstName'].touched) ? "First Name is required" : 
    this.regForm.controls['firstName'].hasError('minlength') ? 'First Name too short' : '' 
  }
  errorAlertLastName(){
    return this.regForm.controls['lastName'].invalid && this.regForm.controls['lastName'].hasError('required') && (this.regForm.controls['lastName'].dirty || this.regForm.controls['lastName'].touched) ? "Last Name is required" : 
    this.regForm.controls['lastName'].hasError('minlength') ? 'Last Name too short' : '' 
  }
  errorAlertUsername(){
    return this.regForm.controls['userName'].invalid && this.regForm.controls['userName'].hasError('required') && (this.regForm.controls['userName'].dirty || this.regForm.controls['userName'].touched) ? "Username is required" : 
    this.regForm.controls['userName'].hasError('minlength') ? 'Username must be atleast 5 characters' : '' 
  }

  errorAlertEmail(){
    return this.regForm.controls['Email'].invalid && this.regForm.controls['Email'].hasError('required') && (this.regForm.controls['Email'].dirty || this.regForm.controls['Email'].touched) ? "Email is required" : 
    this.regForm.controls['Email'].hasError('pattern') ? 'Invalid Email Address' : '' 
  }

  errorAlertPass(){
    return this.regForm.controls['Password'].invalid && this.regForm.controls['Password'].hasError('required') && (this.regForm.controls['Password'].dirty || this.regForm.controls['Password'].touched) ? "Password is required" : this.regForm.controls['Password'].hasError('minlength') ? 'Password must be at least 8 characters' : ''
  }
  errorAlertPassConfirm(){
    return this.regForm.controls['PassConfirm'].invalid && this.regForm.controls['PassConfirm'].hasError('required') && (this.regForm.controls['PassConfirm'].dirty || this.regForm.controls['PassConfirm'].touched) ? "PassConfirm is required" : this.regForm.controls['PassConfirm'].errors?.['passConfirmCheck'] === true ? "Passwords don't match" : ''
  }
  
  onSubmit() {
    alert("Congratulations " + this.regForm.controls['firstName'].value + " " + this.regForm.controls['lastName'].value + ", your registration was successfull");
    console.warn(this.regForm.value);
  }

  passConfirmCheck(a: string, b: string){
    return (formGroup: FormGroup) => {
      let frstField = formGroup.controls[a];
      let fieldConfirm = formGroup.controls[b];

      if(frstField.value !== fieldConfirm.value){
        fieldConfirm.setErrors({passConfirmCheck: true});
      } else{
        fieldConfirm.setErrors(null);
      }
    }
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
