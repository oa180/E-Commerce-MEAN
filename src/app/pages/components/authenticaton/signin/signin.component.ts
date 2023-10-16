import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/carts/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup = new FormGroup({});
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      // ...
    });
  }

  pass: boolean = false;
  clickEvent(event: any) {
    event.preventDefault();
    if (this.signInForm.valid) {
      this.authService
        .sigin(
          this.signInForm.controls['email'].value,
          this.signInForm.controls['password'].value
        )
        .subscribe(
          (res) => {
            // Assuming 'response' contains the token
            document.cookie = `authToken=${res.data.token}; Path=/; SameSite=Strict`;

            this.authService.isLoggedInSubject.next(true);
            this.authService.userRoleSubject.next(res.data.user.role);
            this.router.navigate(['/']);
          },
          (err) => {
            this.authService.isLoggedInSubject.next(false);
            console.log(err);
          }
        );
    }
  }
}
