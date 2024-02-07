import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent {

  public HeadStyler = 'center'
  ContacForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.ContacForm = this.fb.group({
      preffix: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      middleName: [''],
      lastName: ['', [Validators.required]],
      class: ['', [Validators.required]],
      section: ['', [Validators.required]],
      rollNo: ['', [Validators.required]],
      admissonNo: ['', [Validators.required]],
      gender: ['', Validators.required],
      hobby: [''],
      fatherName: ['', [Validators.required]],
      motherName: ['', [Validators.required]]


    })
  }

  OnCancel = () => {


  }

  OnSubmit = () => {
    console.log(this.ContacForm)
  }

}
