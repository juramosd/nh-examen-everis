import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacus',
  templateUrl: './contacus.component.html',
  styleUrls: ['./contacus.component.scss']
})
export class ContacusComponent implements OnInit {

  contactForm: FormGroup
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.contactForm = this.fb.group({
      fullName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],  
      phone: [null, Validators.required],   
      message: [null, Validators.required]
    });
  }
}
