import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserDataService {
    constructor(private http: HttpClient) { }

    public getUsers() {
        return this.http.get<any[]>("../assets/users.json");
    }
}