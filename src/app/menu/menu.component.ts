import { Component, OnInit } from '@angular/core';
import { Category } from '../Models/Category';
import { MenuItem } from '../Models/MenuItems';
import { MatDialog } from '@angular/material/dialog'
import { EditItemComponent } from './edit-item/edit-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { CategoryService } from '../Service/category.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  categories?: Category [];
  constructor(public dialog:MatDialog, public catService:CategoryService) {
    this.getCategories()
  }
  ngOnInit(): void {
  }

  addNewItem(cat:Category){
    var delegate = this.getCategories;
    var dialogref = this.dialog.open(AddItemComponent,{
      data: { cat, delegate },
      
    })
    dialogref.afterClosed().subscribe(c=> this.getCategories())
  }
  getCategories(){
    console.log( this.categories)
    this.categories = []
    this.catService.getCategories().subscribe(result =>{
      this.categories = result;
    })
  }
}
