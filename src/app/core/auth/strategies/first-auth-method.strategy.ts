import { AbstractAuthStrategy } from './abstract-auth.strategy';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class FirstAuthMethodStrategy extends AbstractAuthStrategy {
    // constructor(private http: HttpClient, private router: Router) {
        constructor() {
        super();
    }

    public signIn(email: string, password: string): string {
        return 'Signing in with FirstAuthMethodStrategy';
    }

    public signOut(): string {
        return 'Signing out with FirstAuthMethodStrategy';
    }
}
