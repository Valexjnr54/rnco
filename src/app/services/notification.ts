import { Injectable } from "@angular/core";

import Swal from 'sweetalert2'

@Injectable({
    providedIn: 'root',
  })
export class NotificationService {

  constructor(){}
  alertWarning(text:string){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: text,
      showConfirmButton: false,
      timer: 1500
    })
  }
  alertInfo(text:string){
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: text,
      showConfirmButton: false,
      timer: 1500
    })
  }
  alertSucess(text: string){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: text,
      showConfirmButton: false,
      timer: 1500
    })
  }
  alertError(text: string){
      Swal.fire({
      position: 'center',
      title: 'Error!',
      text: text,
      icon: 'error',
      showConfirmButton: false,
      timer: 1000
    })
    }

    alertSucessMerchant(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Merchant created successfully',
        showConfirmButton: false,
        timer: 4500
      })
    }

  alertSucessBusiness(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Business added successfully',
        showConfirmButton: false,
        timer: 4500
      })
    }

    alertSucessMerchantUpdate(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Merchant details updated successfully',
        showConfirmButton: false,
        timer: 4500
      })
    }
    
    alertSucessProduct(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Product created successfully',
        showConfirmButton: false,
        timer: 4500
      })
    }

    alertSucessProductUpdate(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Product details updated successfully',
        showConfirmButton: false,
        timer: 4500
      })
    }

    alertSucessProductContent(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Product Content created successfully',
        showConfirmButton: false,
        timer: 4500
      })
    }

    alertSucessProductContentUpdate(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Product Content details updated successfully',
        showConfirmButton: false,
        timer: 4500
      })
    }

    alertSucessBank(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bank created successfully',
        showConfirmButton: false,
        timer: 4500
      })
    }
    alertSucessAffiliate(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Affiliate created successfully',
        showConfirmButton: false,
        timer: 4500
      })
    }

    alertSucessAffiliateUpdate(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Affiliate details updated successfully',
        showConfirmButton: false,
        timer: 4500
      })
    }
}