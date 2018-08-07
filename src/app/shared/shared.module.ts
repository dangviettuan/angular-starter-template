import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  declarations: []
})
export class SharedModule {}
