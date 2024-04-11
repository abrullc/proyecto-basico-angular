import { Component } from '@angular/core';
import { DataDisplayComponent } from './data-display/data-display.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DataDisplayComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'proyecto-basico-angular';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormCreateComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
