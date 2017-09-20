import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  server:string;
  testname = "hello";
  testserver = "false";

 constructor(){}
 test(){
   this.testname="welcome";
 }
}
