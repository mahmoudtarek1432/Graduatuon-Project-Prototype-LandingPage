import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/Models/Category';
import { MenuItem, postMenuItem } from 'src/app/Models/MenuItems';
import { CategoryService } from 'src/app/Service/category.service';
import { ItemsComponent } from '../items/items.component';
import { MenuComponent } from '../menu.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  GetCategoriesDelegate: any;
  category:Category
  editForm: FormGroup

  formErrors:any = {
    'name': "",
    'price': "",
    'image': "",
    'describtion': ""
  }

  validationMessage: any = {
    'name':{
      "required": "This Field is required"
    },
    'price':{
      "required": "This Field is required"
    },
    'image':{
      "required": "This Field is required"
    },
    'description':{
      "required": "This Field is required"
    }
  }

  constructor(public dialogRef:MatDialogRef<MenuComponent>,
    @Inject(MAT_DIALOG_DATA) data:any,
    private formBuilder:FormBuilder,
    public catService: CategoryService) {
      this.category = data["cat"];
      this.GetCategoriesDelegate = data["delegate"];
      console.log(data["delegate"])
      this.editForm = formBuilder.group({})
    }
  
  ngOnInit(): void {
    this.createForm()
    this.editForm?.valueChanges.subscribe((data) =>this.onValueChange(data))
  }

  createForm(){
    this.editForm = this.formBuilder.group({
      name:["",Validators.required],
      price:["",Validators.required],
      image:["",Validators.required],
      description:["",Validators.required]
    })
  }
  onValueChange(data?:any){
    if(!this.editForm){return}
    const form = this.editForm
    for(const field in this.formErrors){
      if(this.formErrors.hasOwnProperty(field)){
        this.formErrors[field] = '';
        const control = form.get(field);
        control?.clearValidators();
        if(control && control.dirty && !control.valid){
          const messages = this.validationMessage[field];
          for(const key in control.errors){
            if(control.errors.hasOwnProperty(key)){
              this.formErrors[field] += (this.formErrors[field] != '')?'<br>'+ messages[key] + ' ': ''+ messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  closeDialog(){
    this.dialogRef.close()
  }

  submit(){
    var addItem = new postMenuItem;
    addItem.itemName = this.editForm.get("name")?.value;
    addItem.price =  this.editForm.get("price")?.value;
    addItem.image =  this.editForm.get("image")?.value;
    addItem.description =  this.editForm.get("description")?.value;
    addItem.categoryId = this.category.id;
    console.log(this.category.id)
    this.catService.CreateItem(addItem).subscribe()
  }
}

