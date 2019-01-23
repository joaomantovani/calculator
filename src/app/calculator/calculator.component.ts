import { Component, OnInit } from '@angular/core';
import { Button } from './button/button.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public mapped_buttons: any = [
    [
      new Button("C","btn-red"),
      new Button("+/-", "btn-pale"),
      new Button("%", "btn-pale"),
      new Button("~", "btn-pale"),
    ],
    [
      new Button("7","btn-white"),
      new Button("8","btn-white"),
      new Button("9","btn-white"),
      new Button("x","btn-pale"),
    ],
    [
      new Button("4","btn-white"),
      new Button("5","btn-white"),
      new Button("6","btn-white"),
      new Button("-","btn-pale"),
    ],
    [
      new Button("1","btn-white"),
      new Button("2","btn-white"),
      new Button("3","btn-white"),
      new Button("+","btn-pale"),
    ],
    [
      new Button("0","btn-white"),
      new Button(".","btn-pale"),
      new Button("<","btn-pale"),
      new Button("=", "btn-pale"),
    ]
  ];

  constructor() { }

  ngOnInit() {
  }

  i

}
