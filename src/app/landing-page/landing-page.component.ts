import { Component } from '@angular/core';
import { Routes, RouterModule,Router  } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
constructor(private router: Router) { }

goToPage(pageName:string){
  this.router.navigate([`${pageName}`]);
}
}

