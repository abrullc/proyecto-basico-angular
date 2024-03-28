import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-form-create',
  standalone: true,
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.css',
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class FormCreateComponent {
  formCreate = new FormGroup({
    "title": new FormControl("", Validators.required),
    "image": new FormControl("", Validators.required)
  })
}
