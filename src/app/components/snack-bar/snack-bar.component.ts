import { Component, Inject, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { notificationType } from 'src/app/enum/notificationType';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
})
export class SnackBarComponent implements OnInit {
  notificationType = notificationType;

  constructor(
    private _matSnackBarRef: MatSnackBarRef<MatSnackBar>,
    @Inject(MAT_SNACK_BAR_DATA)
    public data: {
      type?: notificationType;
      message: string;
    }
  ) {}

  ngOnInit(): void {
    if (!this.data?.message || this.data?.message?.trim() === '') {
      this._matSnackBarRef.dismiss();
    }
  }

  dismiss(): void {
    this._matSnackBarRef.dismiss();
  }
}
