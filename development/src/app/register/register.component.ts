import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  googleForm(){
    window.open("https://goo.gl/forms/mdgMjnMdwDpdf0Y63", "_blank");
  }

}
