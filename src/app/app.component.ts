import { Component, OnInit } from '@angular/core';
import { chintanService } from './service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  title = 'Hello Chintan Patel';
  data : any ;
  transportationReport: any;

  constructor(private chintanservice : chintanService)
  {  
  }

   ngOnInit()
   {
    // this.chintanservice.getTrasportationReport().subscribe((res: any)=>
     //{
       //this.transportationReport = res;
       //console.log(this.transportationReport);
     //});
       }
}

