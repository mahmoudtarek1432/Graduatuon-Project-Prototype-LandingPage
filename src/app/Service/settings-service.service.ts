import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { settings } from '../Models/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsServiceService {

  constructor(public http: HttpClient) { }

  public getSettings():Observable<settings>{
    return this.http.get<settings>("http://172.20.10.2:84/api/Settings/",{withCredentials: false})
  }

  public updateSettings(Settings:settings):Observable<any>{
    return this.http.post("http://172.20.10.2:84/api/Settings/",Settings,{withCredentials: false})
  }
}
