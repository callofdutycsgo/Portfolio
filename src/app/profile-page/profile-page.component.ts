import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


export interface DialogData {

}

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent{

  constructor(public dialog: MatDialog) { }

  scroll(el) {
    el.scrollIntoView();
}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDataComponent, {
      width: '650px',
      height: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
templateUrl: 'dialog-data.html',
})

export class DialogDataComponent {
constructor(    public dialogRef: MatDialogRef<DialogDataComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

