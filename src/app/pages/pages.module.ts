import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PagesRoutingModule } from './pages.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule, PagesRoutingModule],
  declarations: [DashboardComponent]
})
export class PagesModule {}
