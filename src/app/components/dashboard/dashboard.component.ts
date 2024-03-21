import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/NotesService/notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  notelist:any;
  constructor(private notes:NotesService){}

  ngOnInit(): void {
      this.onSubmit()
  }
  onSubmit(){
    this.notes.getAllnotes().subscribe((res:any)=>{
      console.log(res);
      this.notelist=res.data;
    })
  }

}
