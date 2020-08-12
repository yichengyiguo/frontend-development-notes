import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent implements OnInit {

  notesList: Array<string> = [
    "简介",
    "数据类型",
    "语句",
    "变量",
    "函数",
    "对象",
    "异步",
    "内置对象",
    "浏览器对象模型BOM",
    "文档对象模型DOM",
    "正则"
  ]

  constructor() { }

  ngOnInit() {
  }

}
