import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-link',
  templateUrl: './book-link.component.html',
  styleUrls: ['./book-link.component.scss']
})
export class BookLinkComponent implements OnInit {
  @Input() bookData: any;
  constructor() { }

  ngOnInit() {
  }

}
