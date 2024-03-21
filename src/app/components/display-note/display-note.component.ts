import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrl: './display-note.component.scss'
})
export class DisplayNoteComponent implements OnInit{
 // @Output() refreshUpdate = new EventEmitter<string>();
  constructor(public dialog:MatDialog){}
 // message:any
  @Input() notesList:any;
  ngOnInit(): void {
  }

  editNoteDialogBox(notes:any){
    const dialogbox = this.dialog.open(UpdateNoteComponent,{
      width:'30vw',
      height:'auto',
      data:notes
    })
    dialogbox.afterClosed().subscribe(res =>{
      console.log(res);
    //  this.refreshUpdate.emit(res);
    })
  }

}
