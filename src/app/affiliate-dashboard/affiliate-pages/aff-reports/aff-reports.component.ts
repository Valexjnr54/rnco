import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
@Component({
  selector: 'app-aff-reports',
  templateUrl: './aff-reports.component.html',
  styleUrls: ['./aff-reports.component.scss']
})
export class AffReportsComponent implements OnInit {
  reports: any
  constructor(
    public rncoService: RncoService
  ) { }

  ngOnInit(): void {
    this.getMerchantConversions()
  }
  getMerchantConversions(){
    const affiliate = localStorage.getItem('userId')  
    this.rncoService.GetAllConversionsByAffiliate(affiliate).subscribe((res)=>{
      this.reports = res
      console.log(res)
    })
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
}
