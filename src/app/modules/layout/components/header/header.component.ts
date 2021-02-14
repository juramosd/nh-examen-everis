import { Component, Input, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError  } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isInterno: boolean;

  constructor(
    private router: Router
  ) { 
    this.ngDetectarUrl();
  }

  ngOnInit(): void {
    this.isInterno = false;
  }

  selectExterno(): void {
    this.isInterno = false;
  }

  ngDetectarUrl():void{
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {         
          if(event.url=="/"){
            console.log("evento: "+event.url);
            this.isInterno = false;
          }else{
            this.isInterno = true;
          }
      }

      if (event instanceof NavigationEnd) {
          
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
      }
  });
  }

}
