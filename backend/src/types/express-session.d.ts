import 'express-session';

declare module 'express-session' {
    interface Session {
        userId?: string; // Add userId property
    }
}
