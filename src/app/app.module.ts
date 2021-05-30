import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatExpansionModule} from '@angular/material/expansion'
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { MatInput, MatInputModule } from '@angular/material/input'
import { HttpClientModule } from '@angular/common/http'
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';
import { from } from 'rxjs';
import { ItemsComponent } from './menu/items/items.component';
import { EditItemComponent } from './menu/edit-item/edit-item.component';
import { AddItemComponent } from './menu/add-item/add-item.component';
import { CategoryService } from './Service/category.service';
import { DashItemsComponent } from './dashboard/items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    MenuComponent,
    SettingsComponent,
    ItemsComponent,
    EditItemComponent,
    AddItemComponent,
    DashItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    RouterModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    CategoryService
  ],
  
  bootstrap: [AppComponent],
})
export class AppModule { }
