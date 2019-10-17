import { Injectable, Inject } from '@angular/core';
import { AbstractAuthStrategy } from '../strategies/abstract-auth.strategy';
import { AbstractAuthService } from './abstract-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AbstractAuthService {
  private _strategy: AbstractAuthStrategy;

  constructor() {
    super();
  }

  public setStrategy(@Inject('strategy') strategy: AbstractAuthStrategy): void {
    this._strategy = strategy;
  }

  public signIn(email: string, password: string): string {
    return this._strategy.signIn(email, password);
  }

  public signOut(): string {
    return this._strategy.signOut();
  }
}
