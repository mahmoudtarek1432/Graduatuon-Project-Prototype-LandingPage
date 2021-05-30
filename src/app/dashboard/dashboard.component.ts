import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MenuItem } from '../Models/MenuItems';
import { Order } from '../Models/Order';
import { CategoryService } from '../Service/category.service';
import { SettingsServiceService } from '../Service/settings-service.service';
import { DashItemsComponent } from './items/items.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showFiller = false
  orders:Order[] = [];
  constructor(private o:CategoryService, private settingsService:SettingsServiceService ,private dialog: MatDialog) {
    o.getOrders().subscribe(result => {this.orders = result; console.log(result);})

    setInterval(this.checkOrders.bind(this),5000)
   }

  ngOnInit(): void {
  }

  openOrderItems(Items: MenuItem[]){
    console.log(this.orders)
    this.dialog.open(DashItemsComponent,{
      data: Items
    })
  }

  checkOrders(){
    this.settingsService.getSettings().subscribe(result=> {
        this.o.getOrders().subscribe(result => {this.orders = result; console.log(result);})
    })
  }

  deleteItem(OrderId:number){
    console.log(OrderId)
    this.o.DeleteOrder(OrderId).subscribe(() => this.o.getOrders().subscribe(result => {this.orders = result; console.log(result);}))
  }
}
