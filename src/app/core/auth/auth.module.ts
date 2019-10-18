import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthService } from './services/auth.service';
import { FirstAuthMethodStrategy } from './strategies/first-auth-method.strategy';
import { SecondAuthMethodStrategy } from './strategies/second-auth-method.strategy';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    SignInComponent,
    HttpClientModule
  ],
  providers: [
    AuthService,
    FirstAuthMethodStrategy,
    SecondAuthMethodStrategy
  ]
})
export class AuthModule { }
