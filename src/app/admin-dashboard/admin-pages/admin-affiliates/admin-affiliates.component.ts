import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-affiliates',
  templateUrl: './admin-affiliates.component.html',
  styleUrls: ['./admin-affiliates.component.scss']
})
export class AdminAffiliatesComponent implements OnInit {
  affNum: any
  suspendedAff: any = []
  activeAff: any = []
  constructor(
    public rncoservice : RncoService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getAllAffiliates()
  }
  allAffiliates: any
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  getAffiliate(x){
    this.router.navigate(['/admin/affiliate'], {queryParams: {id: x}})
  }
  getAllAffiliates(){
    this.rncoservice.GetAllAffiliates().subscribe((res)=>{
      this.allAffiliates = res
      this.allAffiliates.forEach(element => {
        if(element.activated == true){
          this.activeAff.push(element)
        } else {
          this.suspendedAff.push(element)
        }
      });
      this.affNum = this.allAffiliates.length
    })
  }
}
