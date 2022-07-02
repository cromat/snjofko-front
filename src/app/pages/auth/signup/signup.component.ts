import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserProvider } from "../../../core/providers/user.provider";
import { HttpResponse } from "@angular/common/http";
import { NzMessageService } from "ng-zorro-antd/message";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.less' ]
})
export class SignupComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private userProvider: UserProvider,
              private fb: FormBuilder,
              private msg: NzMessageService,
              private router: Router) {
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.userProvider.signup(this.validateForm.value)
        .subscribe((res: boolean) => {
          if (res) {
            this.msg.success('Success!');
            this.router.navigate([ "/auth/login" ]).catch(console.error);
          }
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
      fullName: [ null, [ Validators.required ] ],
      email: [ null, [ Validators.required ] ],
      username: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      confirmedPassword: [ null, [ Validators.required ] ],
    });
  }

}
