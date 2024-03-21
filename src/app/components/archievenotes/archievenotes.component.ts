import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/NotesService/notes.service';

@Component({
  selector: 'app-archievenotes',
  templateUrl: './archievenotes.component.html',
  styleUrl: './archievenotes.component.scss'
})
export class ArchievenotesComponent implements OnInit{
  archiveList:any
  constructor(private notes:NotesService){}

  ngOnInit(): void {
      this.onSubmit()
  }
  onSubmit(){
    this.notes.getAllnotes().subscribe((res:any)=>{
      this.archiveList=res.data
      this.archiveList=this.archiveList.filter((obj:any)=>{
        return obj.isArchive==true&&obj.isTrash==false;
      })
      console.log(this.archiveList)
    })
  }

}
