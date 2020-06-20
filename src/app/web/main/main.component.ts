import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  bookDataArr: object[] = [
    { name: 'Javascript', subtitle: 'Js、Es6', specialNote: 'No.1', color: '#3498db', route: 'javascript' },
    { name: 'Css', subtitle: 'css、css3', specialNote: 'No.2', color: '#f1c40f', route: 'css' },
    { name: 'Git', subtitle: 'Git常用命令', specialNote: 'No.3', color: '#16a085', route: 'git' }
  ]
  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }
  routerLinkTo(route) {
    this.route.navigateByUrl(route)
  }
}
