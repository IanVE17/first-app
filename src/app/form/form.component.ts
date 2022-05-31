import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FormBuilder]
})
export class FormComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder
  ) { }

  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mobile: ['', Validators.required, Validators.pattern('^[0-9]+$')]
    })
  }

  addContact() {
    console.log(this.form);
  }

}
