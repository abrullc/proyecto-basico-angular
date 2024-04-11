import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-update',
  standalone: true,
  templateUrl: './form-update.component.html',
  styleUrl: './form-update.component.css',
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataService
  ]
})
export class FormUpdateComponent {
  public coffee: any

  formCafe = new FormGroup({
    "title": new FormControl("", Validators.required),
    "image": new FormControl("", Validators.required)
  })

  constructor(
    private dataService: DataService,
    private dialogRef: MatDialogRef<FormUpdateComponent>
  ) {}

  onSubmit(){
    this.dataService.updateData(this.formCafe.value, this.coffee);
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
