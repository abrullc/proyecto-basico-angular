import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { DataDisplayComponent } from '../data-display/data-display.component';
import { FormCreateComponent } from '../form-create/form-create.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    DataDisplayComponent,
    RouterModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormCreateComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  topFunction(): void {
    document.documentElement.scrollTop = 0;
  }
}
