import { Component, Input } from '@angular/core';
import { SidebarComponent } from '../../menu/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SidebarComponent, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  sideBarVisible: any = false;

  toogleBarVisible() {
    console.log(this.sideBarVisible);

    this.sideBarVisible = !this.sideBarVisible;
    console.log(this.sideBarVisible);
  }

}
