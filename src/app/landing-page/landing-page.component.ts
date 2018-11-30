import { Component } from '@angular/core';
import { Router  } from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
constructor(private router: Router,
  public snackBar: MatSnackBar) { }

goToPage(pageName:string){
   this.openSnackBar("Welcome to the Portfolio", "close");
  this.router.navigate([`${pageName}`]);
}
openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
    duration: 3400,
  });
}
}

