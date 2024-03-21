import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/NotesService/notes.service';

@Component({
  selector: 'app-deletenote',
  templateUrl: './deletenote.component.html',
  styleUrl: './deletenote.component.scss'
})
export class DeletenoteComponent implements OnInit{
  DeleteList:any
  constructor(private notes:NotesService){}

 ngOnInit(): void {
     this.onSubmit()
 }
 onSubmit(){
  this.notes.getAllnotes().subscribe((res:any)=>{
    this.DeleteList=res.data
    this.DeleteList=this.DeleteList.filter((obj:any)=>{
      return obj.isTrash==true;
    })
    console.log(this.DeleteList)
  })
 }

}
