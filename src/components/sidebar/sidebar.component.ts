import { Component } from '@angular/core';
import { SharedModule } from '../shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [SharedModule, CommonModule]
})
export class SidebarComponent {
  sidebarItems = [
    { label: 'Dashboard', icon: 'home', defaultColor: '#111111', hoverColor: '#ffffff' },
    { label: 'Tasks', icon: 'tasks', defaultColor: '#111111', hoverColor: '#ffffff' },
    { label: 'Chats', icon: 'chats', defaultColor: '#111111', hoverColor: '#ffffff' },
    { label: 'Notifications', icon: 'notifications', defaultColor: '#111111', hoverColor: '#ffffff' },
  ];

  // Array to track hover state for each item
  isHovered: boolean[] = new Array(this.sidebarItems.length).fill(false);

  setHover(index: number, state: boolean) {
    this.isHovered[index] = state;
  }
}
