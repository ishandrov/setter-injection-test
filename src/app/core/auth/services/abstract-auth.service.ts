import { AbstractAuthStrategy } from '../strategies/abstract-auth.strategy';

export abstract class AbstractAuthService {
    public abstract setStrategy(strategy: AbstractAuthStrategy): void;
    public abstract signIn(email: string, password: string): string;
    public abstract signOut(): string;
}