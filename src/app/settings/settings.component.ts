import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { settings } from '../Models/settings';
import { SettingsServiceService } from '../Service/settings-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settings?: settings 
  TerminalSettingsForm:FormGroup 
  formErrors = {
    'brandName': '',
    'primaryColor': '',
    'secondaryColor':'',
    'theme': ''
  }
  constructor(private formBuilder:FormBuilder, public settingsService:SettingsServiceService) { 
   this.TerminalSettingsForm = formBuilder.group({})
  }

  ngOnInit(): void {
    this.settingsService.getSettings().subscribe(result => {this.settings = result; this.createForm(); console.log(this.settings.brandName)} )
    
  }

  createForm(){
    this.TerminalSettingsForm = this.formBuilder.group({
      brandName: [this.settings?.brandName,Validators.required],
      primaryColor: [this.settings?.primaryColor,Validators.required],
      secondaryColor: [this.settings?.secondaryColor,Validators.required],
      theme: [this.settings?.theme,Validators.required]
    })
  }

  submit(){
    var set = new settings;
    set.theme = this.TerminalSettingsForm.get("theme")?.value
    set.primaryColor = this.TerminalSettingsForm.get("primaryColor")?.value
    set.brandName = this.TerminalSettingsForm.get("brandName")?.value
    set.secondaryColor = this.TerminalSettingsForm.get("secondaryColor")?.value
    console.log(set)
    this.settingsService.updateSettings(set).subscribe()
  }
}
