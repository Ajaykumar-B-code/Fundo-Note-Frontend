import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FundoNotesNew';

  isSideNavCollapsed = false;
  screenWidth=0;

  onToggleSideNav(data:SideNavToggle):void {
    this.screenWidth=data.screenwidth;
    this.isSideNavCollapsed=data.collapsed;
  }
}
