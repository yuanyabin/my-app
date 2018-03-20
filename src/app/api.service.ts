import { Injectable } from '@angular/core';

@Injectable()

export class API {
    private hostname = '192.168.0.1';
    private admin = 'admin';
    private tenant = 'tenant';
    private prefix = `${this.hostname}`;

    isAdmin(): boolean {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.role === 0) {
            return true;
        }
        return false;
    }

    private getPrivilege(): string {
        if (this.isAdmin()) {
            return this.admin;
        } else {
            return this.tenant;
        }
    }

    getUserList(): string {
        const _type: string = this.getPrivilege();
        return `${this.prefix}/${_type}/users/List`;
    }
}
