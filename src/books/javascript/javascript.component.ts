import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface ListModel {
  description: string,
  routeTo: string
}

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent implements OnInit {

  notesList: Array<ListModel> = [
    {description: "数据类型", routeTo: 'dataType'},
    {description: "语句", routeTo: ''},
    {description: "变量", routeTo: ''},
    {description: "函数", routeTo: 'function'},
    {description: "对象", routeTo: 'object'},
    {description: "异步", routeTo: ''},
    {description: "内置对象", routeTo: ''},
    {description: "浏览器对象模型BOM", routeTo: ''},
    {description: "文档对象模型DOM", routeTo: ''},
    {description: "正则", routeTo: ''},
    {description: "简介", routeTo: ''},
    {description: "临时笔记", routeTo: 'temporary'}
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateTo(route): void {
    this.router.navigateByUrl('javascript/' + route);
  }
}
