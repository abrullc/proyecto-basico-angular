import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-create',
  standalone: true,
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.css',
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataService
  ],
})
export class FormCreateComponent {
  formCafe = new FormGroup({
    "title": new FormControl("", Validators.required),
    "image": new FormControl("", Validators.required)
  })

  constructor(
    private dataService: DataService,
    private dialogRef: MatDialogRef<FormCreateComponent>
  ) {}

  onSubmit(){
    console.log(this.formCafe.value)
    this.dataService.addData(this.formCafe.value);
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
