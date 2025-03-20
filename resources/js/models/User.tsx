export type Role = "STAFF" | "KEPALA" | "ADMIN";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
    roles: Role[];
}