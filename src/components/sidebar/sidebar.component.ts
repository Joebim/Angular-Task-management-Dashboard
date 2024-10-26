import { Component } from '@angular/core';
import { SharedModule } from '../shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [SharedModule, CommonModule, RouterModule]
})
export class SidebarComponent {
  sidebarItems = [
    { label: 'Dashboard', route:'/dashboard', icon: 'home', defaultColor: '#111111', hoverColor: '#ffffff' },
    { label: 'Tasks', route:'/tasks', icon: 'tasks', defaultColor: '#111111', hoverColor: '#ffffff' },
    { label: 'Chats', route:'/chats', icon: 'chats', defaultColor: '#111111', hoverColor: '#ffffff' },
    { label: 'Notifications', route:'/notifications', icon: 'notifications', defaultColor: '#111111', hoverColor: '#ffffff' },
  ];

  // Array to track hover state for each item
  isHovered: boolean[] = new Array(this.sidebarItems.length).fill(false);

  setHover(index: number, state: boolean) {
    this.isHovered[index] = state;
  }
}
