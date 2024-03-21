import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
// import {MatCardModule} from '@angular/material/card';
// import {MatDialogModule} from '@angular/material/dialog';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatIconModule} from '@angular/material/icon';

import {MatDialogModule} from '@angular/material/dialog'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    CreateNoteComponent,
    DisplayNoteComponent,
    GetAllNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule

   
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
