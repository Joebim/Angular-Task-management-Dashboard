import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ChatsComponent } from './pages/chats/chats.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'chats',
        component: ChatsComponent
    },
    {
        path: 'tasks',
        component: TasksComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    }
];
