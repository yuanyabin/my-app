export interface User {
    id: number;
    name: string;
    Email: string;
    password: string;
    address?: string;
    position?: string;
    explain?: string;
}

export interface CreateUser {
    id: number;
    data: {
        name: string;
        Email: string;
        password: string;
        confirm_passwrod: string;
        address?: string;
        position?: string;
        explain?: string;
    };
}

export interface GetUserListSuccess {
    data: any;
}
