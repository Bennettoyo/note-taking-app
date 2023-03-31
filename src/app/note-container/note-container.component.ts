import { Component, OnInit } from '@angular/core';
import { Note } from '../Interfaces';

@Component({
  selector: 'app-note-container',
  templateUrl: './note-container.component.html',
  styleUrls: ['./note-container.component.scss']
})

export class NoteContainerComponent implements OnInit {
  notes: Note[] = []

  constructor() { }

  ngOnInit(): void {
    let storedNotes = localStorage.getItem("notes")
    if (storedNotes) {
      this.notes = JSON.parse(storedNotes);
    }
  }

  addNote(note: string): void {
    this.notes.unshift({ text: note, date: new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" }), _id: this.guidGenerator() });
    this.setStorage();
  }

  deleteNote(_id: string): void {
    this.notes = this.notes.filter(x => x._id !== _id);
    this.setStorage();
  }

  setStorage(): void {
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  guidGenerator(): string {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
  }
}
