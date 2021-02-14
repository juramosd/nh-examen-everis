import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { data } from '../../models/suscription.model';
import { SuscribeService } from '../../services/suscribe.service';

@Component({
  selector: 'app-suscribe-form',
  templateUrl: './suscribe-form.component.html',
  styleUrls: ['./suscribe-form.component.scss']
})
export class SuscribeFormComponent implements OnInit {

  data: data;
  suscribeForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private suscribeService: SuscribeService,
  ) { 
    this.data  = new data();
  }

  ngOnInit(): void {
    this.initForm();
  }

  get email(): AbstractControl {
    return this.suscribeForm.get('email');
  }

  initForm(): void {
    this.suscribeForm = this.fb.group({
      email: [null, [Validators.required,Validators.pattern(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)]]
    });
  }

  toSuscribe(suscribeForm): void {
    if (suscribeForm.valid) {
      this.data.email= suscribeForm.get('email').value      
      let valor = this.suscribeService.save(this.data).subscribe(
        res => console.log("prueba")
      );
      //this.suscribeForm.controls['email'].setValue('');
    }
  }
}
