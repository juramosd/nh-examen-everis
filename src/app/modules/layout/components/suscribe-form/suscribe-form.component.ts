import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-suscribe-form',
  templateUrl: './suscribe-form.component.html',
  styleUrls: ['./suscribe-form.component.scss']
})
export class SuscribeFormComponent implements OnInit {

  suscribeForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  get email(): AbstractControl {
    return this.suscribeForm.get('email')
  }

  initForm() {
    this.suscribeForm = this.fb.group({
      email: [null,null]
    })
  }

  toSuscribe(suscribeForm) {
  }
}
