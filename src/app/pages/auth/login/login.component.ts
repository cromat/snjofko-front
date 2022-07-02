import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserProvider } from "../../../core/providers/user.provider";
import { HttpResponse } from "@angular/common/http";
import { LoginResponseModel } from "../../../common/models/login-response.model";
import { TokenStorageService } from "../../../core/services/token-storage.service";
import { UserModel } from "../../../common/models/user.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.less' ]
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private userProvider: UserProvider,
              private fb: FormBuilder,
              private tokenStorageService: TokenStorageService,
              private router :Router) {
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.userProvider.login({
        username: this.validateForm.value.username,
        password: this.validateForm.value.password
      }).subscribe((res: LoginResponseModel) => {
        this.tokenStorageService.saveToken(res.accessToken as string);
        this.tokenStorageService.saveUser(res.user as UserModel);
        this.router.navigate([ "/home" ]).catch(console.error);
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ false ]
    });
  }

}
