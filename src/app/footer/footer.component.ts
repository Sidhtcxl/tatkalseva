import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`div {
    height:58px;
    padding-top:12px;
  }`]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
