import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/Models/MenuItems';
import { MatDialog } from '@angular/material/dialog'
import { EditItemComponent } from '../edit-item/edit-item.component';
import { CategoryService } from 'src/app/Service/category.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Input() Item: MenuItem;
  constructor(public dialog:MatDialog, public catService:CategoryService) {
    this.Item = new MenuItem;
    
   }

  ngOnInit(): void {
  }

  openDialog(){
    console.log("here")
    const dialogRef = this.dialog.open(EditItemComponent,{
      data: this.Item
    });
  }

  deleteItem(){
    console.log(this.Item)
    this.catService.deleteItem(parseInt(this.Item.id)).subscribe()
  }
}
