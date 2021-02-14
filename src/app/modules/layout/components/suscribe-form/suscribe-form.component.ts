import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { SuscribeService } from '../../services/suscribe.service';

@Component({
  selector: 'app-suscribe-form',
  templateUrl: './suscribe-form.component.html',
  styleUrls: ['./suscribe-form.component.scss']
})
export class SuscribeFormComponent implements OnInit {

  suscribeForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private suscribeService: SuscribeService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  get email(): AbstractControl {
    return this.suscribeForm.get('email');
  }

  initForm(): void {
    this.suscribeForm = this.fb.group({
      email: [null, null]
    });
  }

  toSuscribe(suscribeForm): void {
    if (suscribeForm.valid) {
      this.suscribeService.save(suscribeForm.get('email').value);
      this.suscribeForm.controls['email'].setValue('');
    }
  }
}
