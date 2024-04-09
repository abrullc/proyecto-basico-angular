import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

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

  ngOnInit(): void {
    this.fetchData();
  }

  public fetchData() {
    this.httpClient
    .get("https://fakestoreapi.com/users")
    .subscribe((users: any) => {
      this.users = users;
    });

    console.log(this.users);
  }

  formLogin = new FormGroup({
    "title": new FormControl("", Validators.required),
    "image": new FormControl("", Validators.required)
  })

  login(){
    console.log(this.formLogin.value)
  }
}
