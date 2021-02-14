import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isInterno: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isInterno = false;
  }

  selectInterno(): void {
    this.isInterno = true;
  }
  selectExterno(): void {
    this.isInterno = false;
  }

}
