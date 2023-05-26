import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  reports: any
  constructor(
    public rncoService: RncoService
  ) { }

  ngOnInit(): void {
    this.getMerchantConversions()
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  getMerchantConversions(){
    const merchant = localStorage.getItem('userId')  
    this.rncoService.GetConversionsByMerchant(merchant).subscribe((res)=>{
      this.reports = res
    })
  }
}
