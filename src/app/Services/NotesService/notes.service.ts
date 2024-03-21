import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
   token: any;
constructor(private httpService: HttpService){ this.token=localStorage.getItem('token')}

addNotes(reqData:any,){
  let header={
    headers: new HttpHeaders({
      'Content-type' : 'application/json' ,
      'Authorization' :'Bearer '+this.token
    })
  }
  console.log(this.token)
  return this.httpService.postServiceReset('https://localhost:44318/api/Notes/addNote',reqData,true,header)
}
getAllnotes(){
  let header ={
    headers: new HttpHeaders({
      'Content-type' : 'application/json' ,
      'Authorization' :'Bearer '+this.token

    })
  }
  return this.httpService.getService('https://localhost:44318/api/Notes/allNotes',true,header)
}
}
