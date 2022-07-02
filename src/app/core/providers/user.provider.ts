import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { AutoUnsubscribe } from "ngx-auto-unsubscribe-decorator";
import { Observable } from "rxjs";
import { LoginCommand } from "../../common/commands/login.command";
import { LoginResponseModel } from "../../common/models/login-response.model";
import { SignupCommand } from "../../common/commands/signup.command";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable(
  { providedIn: 'root' }
)
export class UserProvider {

  readonly url = environment.apiUrl + 'users/';

  constructor(private http: HttpClient) {
  }

  @AutoUnsubscribe()
  login(cmd: LoginCommand): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(this.url + 'login', cmd);
  }

  @AutoUnsubscribe()
  signup(cmd: SignupCommand): Observable<boolean> {
    return this.http.post<boolean>(this.url + 'signup', cmd);
  }


}
