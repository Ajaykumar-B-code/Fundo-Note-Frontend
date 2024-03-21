import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/NotesService/notes.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrl: './get-all-notes.component.scss'
})
export class GetAllNotesComponent implements OnInit {
  notesArray:any;
  constructor(private notes:NotesService){}
 
  ngOnInit(): void{
    this.onSubmit()
  }
  onSubmit(){
    this.notes.getAllnotes().subscribe((res:any)=>{
      console.log(res);
      this.notesArray = res.data;
      this.notesArray=this.notesArray.filter((Object:any)=>{
        return Object.isArchive==false;
      })
      this.notesArray=this.notesArray.filter((Object:any)=>{
        return Object.isTrash==false;
      })
      console.log(res)
      this.notesArray.reverse()
    })
  }
  refreshEventCreate($event:any){
    console.log("notes created"+$event);
    this.onSubmit();
  }
  refesheventUpdate($event:any){
    console.log("notes updated"+$event);
    this.onSubmit();
  }
}



