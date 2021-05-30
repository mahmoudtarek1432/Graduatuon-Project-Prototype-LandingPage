import { Component, Inject, inject, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuItem } from 'src/app/Models/MenuItems';
import { DashboardComponent } from '../dashboard.component';

@Component({
  selector: 'app-dash-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class DashItemsComponent implements OnInit {

  orderItems:MenuItem[] = []

  constructor(private MatDialogRef:MatDialogRef<DashboardComponent>,@Inject(MAT_DIALOG_DATA) data:MenuItem[]) {
    this.orderItems = data
    console.log(data)
   }

  ngOnInit(): void {
  }

}
