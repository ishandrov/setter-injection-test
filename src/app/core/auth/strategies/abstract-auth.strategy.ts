export abstract class AbstractAuthStrategy {
    public abstract signIn(email: string, password: string): string;
    public abstract signOut(): string;
}
