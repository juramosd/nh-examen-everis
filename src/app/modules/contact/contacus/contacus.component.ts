import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../model/contact.model';
import { ContacService } from '../services/contac.service';

@Component({
  selector: 'app-contacus',
  templateUrl: './contacus.component.html',
  styleUrls: ['./contacus.component.scss']
})
export class ContacusComponent implements OnInit {

  contactForm: FormGroup;
  contact: Contact;
  constructor(
    private fb: FormBuilder,
    private conctactService: ContacService
  ) { 
    this.contact = new Contact();
  }

  ngOnInit(): void {
    this.initForm();
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {    
    if (this.contactForm.valid) {
      this.contact.deserialize(this.contactForm.value);
      this.save();
    }
  }

  initForm(): void {
    this.contactForm = this.fb.group({
      fullname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.pattern("^((\\+51-?)|0)?[0-9]{9}$")]],
      message: [null, Validators.required]
    });
  }

  private save() {
    this.conctactService.save(this.contact).subscribe(
      book => {
        console.log("Enviado correctamente");
        this.contactForm.reset();
      }
    )
  }
}
