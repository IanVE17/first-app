import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  contacts: any[];

  constructor() { }

  ngOnInit() {
    this.contacts = [
      {name: 'Jorge'},
      {name: 'Eduardo'},
      {name: 'Tania'},
      {name: 'Alan'},
      {name: 'Jose'},
      {name: 'Arturo'},
      {name: 'Jona Gay'}
    ]
  }

}
