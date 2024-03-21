import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './authGuard/authguard.guard';
import { ArchievenotesComponent } from './components/archievenotes/archievenotes.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { DeletenoteComponent } from './components/deletenote/deletenote.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { BottomIconsComponent } from './components/bottom-icons/bottom-icons.component';
import { CreateTopComponent } from './components/create-top/create-top.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';

const routes: Routes = [
  {path:'login',component:LoginComponent,},
  {path:'register',component:RegisterComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'reset-password/:token',component:ResetPasswordComponent},
  {path:'sidenav',component:SidenavComponent},
  {path:'toolbar',component:ToolbarComponent},
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'arch',
        component:ArchievenotesComponent
      },
      {path:'note',component:GetAllNotesComponent},
      {path:'deletenotes',component:DeletenoteComponent},
  ]},
  {path:'arch',component:ArchievenotesComponent},
  {path:'create',component:CreateNoteComponent},
  {path:'bottomIcon',component:BottomIconsComponent},
  {path:'createTop',component:CreateTopComponent},
  {path:'dispnote',component:DisplayNoteComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
