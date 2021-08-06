import  {HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {ReplaySubject ,BehaviorSubject} from 'rxjs'
import { Observable }  from 'rxjs'

@Injectable({
    providedIn: 'root',
  })
export class chintanService{
    private chintanSerUrl = '../assets/experinceSummaryData.json';
    constructor(private http: HttpClient)
    {
        console.log(this.http.get<any>(this.chintanSerUrl));
    }

    getTrasportationReport() : Observable<any> {
        console.log(this.http.get<any>(this.chintanSerUrl));
        return this.http.get<any>(this.chintanSerUrl);
    }
}

