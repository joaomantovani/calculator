import {Component, Input, OnInit} from '@angular/core';
import {Visor} from './visor.model';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {

  @Input() input: Number;
  @Input() visor: Visor;

  constructor() { }

  ngOnInit() {

  }

}
