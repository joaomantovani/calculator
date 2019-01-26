import {Component, Input, OnInit} from '@angular/core';
import {Button} from './button.model';
import {Visor} from '../visor/visor.model';
import {ButtonService} from './button.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() button: Button;
  @Input() visor: Visor;

  buttonHandle() {
    switch (this.button.type) {
      case 'number':
        this.visor.value += this.buttonService.addNumber(this.button);
        break;
      case 'clear':
        this.visor.value = this.buttonService.clear();
        break;
      case 'division':
        this.visor.value += this.buttonService.addNumber(this.button);
        break;
      case 'multiplication':
        this.visor.value += this.buttonService.multiplication();
        break;
      case 'subtraction':
        this.visor.value += this.buttonService.subtraction();
        break;
      case 'addition':
        this.visor.value += this.buttonService.addition();
        break;
      case 'dot':
        this.visor.value += this.buttonService.addDot();
        break;
      case 'low':
        this.visor.value = this.buttonService.low(this.visor.value);
        break;
      case 'result':
        this.visor.value = this.buttonService.result(this.visor.value);
        break;
      case 'reverse':
        this.visor.value = this.buttonService.reverse(this.visor.value);
        break;
      case 'mod':
        this.visor.value += this.buttonService.mod();
        break;
    }
  }

  constructor(private buttonService: ButtonService) { }

  ngOnInit() {

  }

}
