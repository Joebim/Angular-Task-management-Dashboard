// src/components/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { SidebarIconsComponent } from './sidebar/sidebar-icons/sidebar-icons.component';

@NgModule({
  declarations: [LogoComponent, SidebarIconsComponent],
  imports: [CommonModule],
  exports: [LogoComponent, SidebarIconsComponent]
})
export class SharedModule {}
