import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ARRAY';
  formarry: any
  signupForm: any;

  constructor() { }

  get hobbyControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }


  ngOnInit(): void {
    this.signupForm = new FormGroup({
      "userData": new FormGroup({
        "username": new FormControl("", Validators.required),
        "password": new FormControl("", Validators.required),
      }),
      "hobbies": new FormArray([])
    })
  }

  submit(data: any) {

    console.log(data);
    alert("Data Submitted !!");

  }

  onAddHobby() {
    let control = new FormControl("", [Validators.required]);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // removeHobbies(i: any) {
  //   console.log(i);  
  //   ((<FormArray>this.signupForm.get('hobbies')).controls).splice(i,1)
  // }

}
