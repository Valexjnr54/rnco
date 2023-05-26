import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { RncoService } from 'app/services/rncoService';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from 'app/services/notification';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    public router: Router,
    public rncoService: RncoService,
    public notification: NotificationService,
    private route: ActivatedRoute

  ) {}
  // toggle password
  hidePassword = true;
  linkUserName: string;
  ngOnInit() {
    this.loginAuth();
    this.linkUserName = this.route.snapshot.paramMap.get('username');
  }
  loginAuth(){
    this.loginForm = this.fb.group({
      username: '',
      password: '',
    })
  }

  loginUser(){
    let password = this.loginForm.value.password;
    if(password.length < 8){
      this.notification.alertError('The password must be a minimum of 8 alphanumeric characters')
    } else{
      this.rncoService.LoginAuth(this.loginForm.value).subscribe((res) => {
        if(res['status'] === 200){

         // localStorage.setItem('access_token', res['body'].id_token);
          localStorage.setItem('access_token', res.headers.get('Authorization'));
          localStorage.setItem('userId', res['body'].user.id);
          localStorage.setItem('firstName', res['body'].user.firstName);
          localStorage.setItem('lastName', res['body'].user.lastName);
          localStorage.setItem('userEmail', res['body'].user.email);
          localStorage.setItem('userStatus',res['body'].user.userStatus)
          localStorage.setItem('registerdBiz', res['body'].user.registeredBiz)
          this.notification.alertSucess('Login Successful')
          // this.router.navigate(['/merchant/dashboard'])
          if(res['body'].user.userType === 'AFFILIATE'){
            this.router.navigate(['/affiliate/affiliateDashboard'])
              .then(()=>{
                window.location.reload()
              })
          }
          if(res['body'].user.userType === 'MERCHANT'){
            this.router.navigate(['/merchant/dashboard'])
              .then(()=>{
                window.location.reload()
              })
          }
          if(res['body'].user.userType === 'ADMIN'){
            this.router.navigate(['/admin/dashboard'])
              .then(()=>{
                window.location.reload()
              })
          }
          // set user in local storage
          localStorage.setItem('current_user', this.loginForm.value.username)
        }else{
          this.notification.alertError(res['error'])
        }
      });
    }
  }
}
