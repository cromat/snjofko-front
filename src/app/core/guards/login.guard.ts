import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // if (true) {
    //   this.router.navigate(["/items/highlighted"]).catch(console.error);
    //   return true;
    // }
    //
    // this.router.navigate(["/login"]).catch(console.error);
    return true;
  }
}
