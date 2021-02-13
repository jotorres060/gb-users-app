export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    password_confirmation?: string;
    age: number;
    gender: string;
    address: string;
    created_at: string;
    updated_at: string;
}