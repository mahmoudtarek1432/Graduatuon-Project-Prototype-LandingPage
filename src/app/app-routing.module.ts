import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditItemComponent } from './menu/edit-item/edit-item.component';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
