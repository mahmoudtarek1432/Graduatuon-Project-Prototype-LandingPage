import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuItem } from 'src/app/Models/MenuItems';
import { CategoryService } from 'src/app/Service/category.service';
import { ItemsComponent } from '../items/items.component';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  item:MenuItem = new MenuItem
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

  constructor(public dialogRef:MatDialogRef<ItemsComponent>,
              @Inject(MAT_DIALOG_DATA)public data: MenuItem,
              private formBuilder:FormBuilder,
              public catService: CategoryService) {
                this.item = data;
                this.editForm = formBuilder.group({})
              }

  ngOnInit(): void {
    this.createForm()
    this.editForm?.valueChanges.subscribe((data) =>this.onValueChange(data))
  }

  createForm(){
    this.editForm = this.formBuilder.group({
      name:[this.item.itemName,Validators.required],
      price:[this.item.price,Validators.required],
      image:[this.item.image,Validators.required],
      description:[this.item.description,Validators.required]
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

  Submit(){
    var subItem = this.item
    subItem.itemName = this.editForm.get("name")?.value
    subItem.price = this.editForm.get("price")?.value
    subItem.image = this.editForm.get("image")?.value
    subItem.description = this.editForm.get("description")?.value
    this.catService.updateItem(subItem).subscribe();
  }
 
}