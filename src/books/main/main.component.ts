import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private bookIndex: number = 1;

  bookDataArr: object[] = [
    { name: 'Javascript', subtitle: 'Js、Es6', specialNote: this.getBookNum(), color: '#3498db', route: 'javascript' },
    { name: 'Html', subtitle: 'Html、Html5', specialNote: this.getBookNum(), color: '#A084F1', route: 'html' },
    { name: 'Css', subtitle: 'css、css3', specialNote: this.getBookNum(), color: '#f1c40f', route: 'css' },
    { name: 'Angular', subtitle: '基础、进阶', specialNote: this.getBookNum(), color: '#144BA0', route: 'angular' },
    { name: 'Typescript', subtitle: '类型声明、检查', specialNote: this.getBookNum(), color: '#73ABFE', route: 'typescript' },
    { name: 'Git', subtitle: 'Git常用命令', specialNote: this.getBookNum(), color: '#16a085', route: 'git' },
    { name: 'Typescript', subtitle: '类型声明、检查', specialNote: this.getBookNum(), color: '#73ABFE', route: 'typescript' }
  ]
  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  routerLinkTo(route) {
    this.route.navigateByUrl(route)
  }

  getBookNum(): string {
    return 'No.' + this.bookIndex++;
  }

}
