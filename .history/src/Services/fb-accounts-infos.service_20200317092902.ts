import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { fb_accounts_infos } from 'Model/fb_accounts_infos';
import { effect_activity } from 'Model/effect_activity';

@Injectable({
  providedIn: 'root'
})
export class FbAccountsInfosService {

  private _url = 'http://192.168.1.63:8080/sysc/';
  constructor(private http: HttpClient) { }

  data = { fb_accounts_infos: [
        {
            type: 'mobile',
            total_count: 131,
            active_count: 0
        },
        {
            type: 'email',
            total_count: 22,
            active_count: 0
        }
    ],
    fb_effect_types: [
        'comment',
        'share',
        'like',
        'ahah',
        'love',
        'wow',
        'sigh',
        'grrr'
    ],
    fb_url_types: [
        'page',
        'profile',
        'group',
        'post'
    ],
    fb_account_types: [
        'mobile',
        'email'
    ]
};
  getAccount(): Observable<any[]>{
    this._url += 'Appliction_info';
    return this.http.get<any[]>(this._url);
    //return of (this.data);
  }

  Post_Effect_Activity(account_types: fb_accounts_infos): Observable<fb_accounts_infos>{
    { 
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<fb_accounts_infos>(this._url + 'effect_activity', account_types, httpOptions);  
  
}
  }
}