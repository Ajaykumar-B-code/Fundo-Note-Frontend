import { Component, EventEmitter, Output } from '@angular/core';

interface SideNavToggle{
  screenwidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  sidelist: any[]=[
    {logo:"home", name:"Notes" },
    {logo:"notifications", name:"Reminder"},
    {logo:"edit", name:"Edit labels"},
    {logo:"archive", name:"Archive"},
    {logo:"delete", name:"Trash"},
  ]
 @Output() onToggleSideNav: EventEmitter<SideNavToggle> =new EventEmitter();
  collapsed=false;
  screenwidth=0;
  navData = this.sidelist;
  toggleCollapse():void{
    this.collapsed=!this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenwidth:this.screenwidth});
  }
}
