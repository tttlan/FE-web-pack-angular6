import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GenericService } from "../core/generic.service";
import { MsalService } from "../msal/msal.service";

export interface Auth {
    userName: string;
    password: string;
}

@Injectable()
export class AuthService extends GenericService {
    public hash_token: string = null;
    public isAuthenticated: boolean;
    public isOnline: boolean;

    constructor(http: HttpClient, private msal: MsalService) {
        super(http);

        this.isAuthenticated = false;
        this.isOnline = this.msal.isOnline();
        this._serviceUrl = this._serviceUrl + 'auth';
    }

    login(auth: Auth) {
        const serviceUrlLogin = this._serviceUrl + '/login';

        this.create(serviceUrlLogin, auth, this.loginSuccess, this.loginError);
    }

    loginSuccess(data: any) {
        console.log(data);
    }

    loginError(data: any) {
        console.log(data);
    }

    logout() {

    }
}