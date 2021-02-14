import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-message-error',
  templateUrl: './form-message-error.component.html',
  styleUrls: ['./form-message-error.component.scss']
})
export class FormMessageErrorComponent implements OnInit {

  @Input() control: FormControl;
  constructor() { }

  ngOnInit(): void {
  }

}
