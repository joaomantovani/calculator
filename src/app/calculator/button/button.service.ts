import { Injectable } from '@angular/core';
import {Button} from './button.model';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  constructor() { }

  clear() {
    return '';
  }

  division() {
    return ' / ';
  }

  addNumber(button: Button) {
    return button.value;
  }

  multiplication() {
    return ' * ';
  }

  subtraction() {
    return ' - ';
  }

  addition() {
    return ' + ';
  }

  addDot() {
    return '.';
  }

  low(value: string) {
    return value.split('').splice(0, value.length -1).join('');
  }

  result(value: string) {
    try {
      return eval(value);
    } catch (e) {
      return 'Error';
    }
  }

  reverse(value: string) {
    if (value.split(' ').length > 1)
      return value;
    else {
      let reversed = Number(value) * -1;
      return reversed.toString();
    }
  }

  mod() {
    return '%';
  }
}
