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
  MatListModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatCheckboxModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule
  ],
  declarations: []
})
export class SharedModule {}
