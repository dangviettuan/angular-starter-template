import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [AuthRoutingModule, SharedModule],
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent]
})
export class AuthModule {}
