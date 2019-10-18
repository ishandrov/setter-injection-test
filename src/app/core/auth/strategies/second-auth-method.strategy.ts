import { AbstractAuthStrategy } from './abstract-auth.strategy';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class SecondAuthMethodStrategy extends AbstractAuthStrategy {
        constructor(private http: HttpClient, private router: Router) {
        super();
    }
    public signIn(email: string, password: string): string {
        return 'Signing in with SecondAuthMethodStrategy';
    }

    public signOut(): string {
        return 'Signing out with SecondAuthMethodStrategy';
    }
}
