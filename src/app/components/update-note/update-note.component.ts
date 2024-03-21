import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotesService } from '../../Services/NotesService/notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrl: './update-note.component.scss'
})
export class UpdateNoteComponent implements OnInit{
  title:any;
  description:any;
  note_id:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogbox : MatDialogRef<UpdateNoteComponent>,
    private notes:NotesService){
      this.title=data.title,
      this.description=data.description,
      this.note_id= data.notesId
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
    closeDialog(){
      let reqData={
        title:this.title,
        description:this.description
      }
      console.log(reqData);
      this.notes.updatenote(reqData,this.note_id).subscribe((res:any)=>{
        console.log(res);
        this.dialogbox.close()
      })
    }


}
