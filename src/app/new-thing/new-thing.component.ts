import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-new-thing',
  templateUrl: './new-thing.component.html',
  styleUrls: ['./new-thing.component.css']
})
export class NewThingComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit() {
  }

}