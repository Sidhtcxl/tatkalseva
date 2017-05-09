import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
      .xcsd,.navbar-brand:hover,.navbar-brand,.navbar-brand:visited{
        color:white;
      }
      .navbar{
        background-color:#029acf;
      }
      .xcsd:hover,li>.xcsd:focus{
        background:#3b5998;
      }
      .navbar{
        height:47px;
      }
      nav ul{
        padding-top:3px;
      }
      .navbar-brand>img {
        height: 100%;
        width: auto;
        padding: 7px 15px;
      }
      .navbar-brand {
        padding: 0px;
      }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
