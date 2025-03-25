export type Role = "staff" | "kepala" | "admin";

export interface UserModel {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
    roles: Role[];
}