import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PagesRoutingModule } from './pages.routing';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports: [SharedModule, PagesRoutingModule],
  declarations: [DashboardComponent, PagesComponent, NavBarComponent]
})
export class PagesModule {}
