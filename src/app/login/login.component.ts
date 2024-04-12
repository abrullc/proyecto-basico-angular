import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  httpClient = inject(HttpClient);
  users: any[] = [];
  user: any;
  username: any;
  password: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.httpClient
      .get("https://fakestoreapi.com/users")
      .subscribe((user: any) => {
        this.users.push(user);
      });
  }

  formLogin = new FormGroup({
    "username": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required)
  })

  login() {
    this.users[0].forEach((user: { username: string; password: string; }) => {
      if (user.username == this.formLogin.value.username && user.password == this.formLogin.value.password) {
        this.router.navigate(['main']);
      }
    })
  }
}
