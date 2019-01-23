import {Component, Input, OnInit} from '@angular/core';
import {Button} from './button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() value: Button;

  addValueToVisor() {

  }

  constructor() { }

  ngOnInit() {
  }

}
