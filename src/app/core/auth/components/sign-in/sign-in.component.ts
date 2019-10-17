import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FirstAuthMethodStrategy } from '../../strategies/first-auth-method.strategy';
import { SecondAuthMethodStrategy } from '../../strategies/second-auth-method.strategy';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  email: string = 'someemail@email.com';
  password: string = 'somepassword';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public signInWithFirstAuthMethod(email: string, password: string): void {
    this.authService.setStrategy(new FirstAuthMethodStrategy());
    console.log(this.authService.signIn(email, password));
  }

  public signOutWithFirstAuthMethod(): void {
    this.authService.setStrategy(new FirstAuthMethodStrategy());
    console.log(this.authService.signOut());
  }

  public signInWithSecondAuthMethod(email: string, password: string): void {
    this.authService.setStrategy(new SecondAuthMethodStrategy());
    console.log(this.authService.signOut());
  }

  public signOutWithSecondMethod(): void {
    this.authService.setStrategy(new SecondAuthMethodStrategy());
    console.log(this.authService.signOut());
  }

}
