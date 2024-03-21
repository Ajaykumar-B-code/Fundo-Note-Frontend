import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotesService } from '../../Services/NotesService/notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.scss'
})
export class CreateNoteComponent implements OnInit{
  //@Output() refreshCreate = new EventEmitter<string>();
display:boolean=true;
Noteform!: FormGroup;
submitted=false;
//token:any;
constructor(private formBuilder:FormBuilder, private notes:NotesService){}
ngOnInit():void{
  this.Noteform=this.formBuilder.group(
    {
      Title:['',[Validators.required]],
      Description:['',[Validators.required]]
    }
  )
}
OnSubmitNote(){
  this.submitted=true;
  if(this.Noteform.valid){
    let reqData ={
      Title:this.Noteform.value.Title,
      Description:this.Noteform.value.Description
    }
    console.log(reqData);
    this.notes.addNotes(reqData).subscribe((res:any)=>{
      console.log(res);
   //   this.refreshCreate.emit(res)
    });
  }
  this.display=true;

}
}
