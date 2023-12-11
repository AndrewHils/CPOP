// src/app/user-details-popup/user-details-popup.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-details-popup',
  templateUrl: './user-details-popup.component.html',
  styleUrls: ['./user-details-popup.component.css']
})
export class UserDetailsPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
