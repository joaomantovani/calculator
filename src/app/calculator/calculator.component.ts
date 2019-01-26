import { Component, OnInit } from '@angular/core';
import { Button } from './button/button.model';
import {Visor} from './visor/visor.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public visor: Visor;
  public mapped_buttons: any = [
    [
      new Button('C', 'btn-red', 'clear'),
      new Button('+/-', 'btn-pale', 'reverse'),
      new Button('%', 'btn-pale', 'mod'),
      new Button('/', 'btn-pale', 'division'),
    ],
    [
      new Button('7', 'btn-white', 'number'),
      new Button('8', 'btn-white', 'number'),
      new Button('9', 'btn-white', 'number'),
      new Button('x', 'btn-pale', 'multiplication'),
    ],
    [
      new Button('4', 'btn-white', 'number'),
      new Button('5', 'btn-white', 'number'),
      new Button('6', 'btn-white', 'number'),
      new Button('-', 'btn-pale', 'subtraction'),
    ],
    [
      new Button('1', 'btn-white', 'number'),
      new Button('2', 'btn-white', 'number'),
      new Button('3', 'btn-white', 'number'),
      new Button('+', 'btn-pale', 'addition'),
    ],
    [
      new Button('0', 'btn-white', 'number'),
      new Button('.', 'btn-pale', 'dot'),
      new Button('<', 'btn-pale', 'low'),
      new Button('=', 'btn-pale', 'result'),
    ]
  ];

  constructor() { }

  ngOnInit() {
    this.visor = new Visor("")
  }

}
