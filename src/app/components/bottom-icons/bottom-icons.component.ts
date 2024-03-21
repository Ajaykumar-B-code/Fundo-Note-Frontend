import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from '../../Services/NotesService/notes.service';

@Component({
  selector: 'app-bottom-icons',
  templateUrl: './bottom-icons.component.html',
  styleUrl: './bottom-icons.component.scss'
})
export class BottomIconsComponent implements OnInit{
  @Input() notesObject:any
  @Output() refreshUpdate = new EventEmitter<string>();
 constructor(private notes:NotesService){
 }
  ngOnInit(): void {
      
  }
   onArchieve(){
     let reqData ={
       notesId:this.notesObject.notesId,
     }
     console.log(reqData)
     this.notes.Archievenote(reqData).subscribe((res:any)=>{
       console.log(res);
     })
   }
 
   colorsArray: Array<any>=[
     { code: '#ffffff', name: 'white'},
     {code:'#FF6347',name:'Tomato'},
     {code:'#FF4500',name:'OrangeRed'},
     {code:'#FFFF00',name:'yellow'},
     {code:'#7FFFD4',name:'Aquamarine'},
     {code:'#ffffff',name:'white'},
     {code:'#D3D3D3',name:'grey'},
     {code:'#BC8F8F',name:'RosyBrown'},
     {code:'#C0C0C0',name:'Silver'}
   ]
   selectcolor(colors:any){
       let reqData={
         notesId:this.notesObject.notesId,
         colour:colors.name
       }
       console.log("in reqdaa ",reqData)
       this.notes.AddColor(reqData).subscribe((res:any) =>{
         console.log(res)
         this.refreshUpdate.emit(res)
       })
   }
   onDelete(){
     let reqData ={
       notesId:this.notesObject.notesId,
     }
     console.log(reqData)
     this.notes.DeleteNote(reqData).subscribe((res:any)=>{
       console.log(res);
     })
   }

}
