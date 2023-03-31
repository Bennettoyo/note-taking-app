import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<string>();
  inputValue: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    this.submitEvent.emit(this.inputValue);
    this.inputValue = "";
  }
}
