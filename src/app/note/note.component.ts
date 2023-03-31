import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../Interfaces';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() data!: Note;
  @Output() deleteEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(): void {
    this.deleteEvent.emit(this.data._id);
  }
}
