import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
    name: string;
    email: string;
    password: string;
    role: string;
}

const STORAGE_KEY = 'app_users';
const CURRENT_USER_KEY = 'current_user';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    private usersSubject: BehaviorSubject<User[]>;
    users$: Observable<User[]>;

    private currentUser: BehaviorSubject<User | null>;
    currentUser$: Observable<User | null>;

    constructor() {
        const initialUsers = this.isBrowser()
            ? this.loadUsersFromStorage()
            : [
                {
                    name: 'Nikhil',
                    email: 'nikhil@gmail.com',
                    password: 'pass123',
                    role: 'Admin'
                }
            ];

        const savedCurrentUser = this.isBrowser() ? this.loadCurrentUserFromStorage() : null;

        // ✅ Initialize BehaviorSubjects
        this.usersSubject = new BehaviorSubject<User[]>(initialUsers);
        this.users$ = this.usersSubject.asObservable();

        this.currentUser = new BehaviorSubject<User | null>(savedCurrentUser);
        this.currentUser$ = this.currentUser.asObservable();
    }

    private isBrowser(): boolean {
        return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    }

    private loadUsersFromStorage(): User[] {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    }

    private loadCurrentUserFromStorage(): User | null {
        const saved = localStorage.getItem(CURRENT_USER_KEY);
        return saved ? JSON.parse(saved) : null;
    }

    getUsers(): User[] {
        return this.usersSubject.value;
    }

    addUser(user: User): void {
        const updated = [...this.usersSubject.value, user];
        this.usersSubject.next(updated);
        if (this.isBrowser()) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        }
    }

    getCurrentUser(): User | null {
        return this.currentUser.value;
    }

    setCurrentUser(user: User|null): void {
        this.currentUser.next(user);
        if (this.isBrowser()) {
            localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
        }
    }

    clearUsers(): void {
        this.usersSubject.next([]);
        if (this.isBrowser()) {
            localStorage.removeItem(STORAGE_KEY);
        }
    }

    clearCurrentUser(): void {
        this.currentUser.next(null);
        if (this.isBrowser()) {
            localStorage.removeItem(CURRENT_USER_KEY);
        }
    }
}
