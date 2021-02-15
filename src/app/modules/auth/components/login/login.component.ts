import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { StorageAuthService } from 'src/app/shared/services/storage-auth.service';
import { environment } from 'src/environments/environment';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginRedirect: string = environment.loginRedirect;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private storage: StorageAuthService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  get f(): any {
    return this.loginForm.controls;
  }

  onsubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;
      this.loginService.login({username, password}).subscribe(
        session => {
          this.storage.setToken(session.token);   
          this.router.navigate([this.loginRedirect]);       
        }
      );
    }
  }

}
