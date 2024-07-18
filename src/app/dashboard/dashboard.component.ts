import { Component } from '@angular/core';
import { SidebarComponent } from '../components/menu/sidebar/sidebar.component';
import { HeaderComponent } from '../components/layout/header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
