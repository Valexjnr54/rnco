import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
import { NotificationService } from 'app/services/notification';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.scss']
})
export class AdminEditProductComponent implements OnInit {

  constructor(
    public notification: NotificationService,
    public rncoService: RncoService,
    private route: ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getUserId();
    this.getProductID();
  }
   productID: string
  productDetails: any
  productName: string;
  category: string;
  productCode: string;
  unitPrice: number;
  quantity: number;
  deliveryPeriod: string;
  duration: number;
  conversionType: string;
  rate: number;
  desc: string;
  options: string;

  percent: boolean;
  payoutId: number;
  amountPerConversion: number;

  isProducts:false

  userId: number
  productImages:any = []
  productImage: File = null;
  fileUrlArray = []
  fileArray = []
  uploadArray = []
  ImageAdded= false;
  fileURL:any
  productFormData = new FormData();
   paymentConfig: object;
   getUserId(){
    const userString = localStorage.getItem('userId')  
    this.userId = parseInt(userString)
     console.log('id:::::'+ userString)
  }
  getProductID(){
    this.route.queryParams.subscribe(params=>{
      console.log(params)
      this.productID = params.id;
      this.getProductDetails(this.productID)
    })
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  getProductDetails(id){
    this.rncoService.GetAnyProduct(id).subscribe((res)=>{
      this.productDetails = res
      this.paymentConfig = res['productPayoutConfig']
      // get product images
      
        // loop through response
        this.productImages = res['productImages']
       for (let index = 0; index < this.productImages.length; index++) {
        const images = this.productImages[index];
       // this.fileArray.push(images['imageUrl'])


        this.fileUrlArray.push(images['imageUrl'])
        this.fileArray.push(images)

        console.log(this.fileArray)
       }
    
      this.productAlign()
    })
  }

deleteImage(x, y){
    // make call to delete Image API
    const check = confirm('Are you sure you want to delete this?')
    if(check){
      if(x < 7){
        // this is to ensure new entries are not sent to service layer
        this.fileArray.forEach((element, index) => {
          if(element.id == x){
            this.fileArray.splice(index, 1)
          }
        });
        // Remove file from Upload Array
        this.uploadArray.forEach((element,index)=>{
          const reader = new FileReader();
          reader.readAsDataURL(element);
          reader.onload = (_event) =>{
            if (reader.result == y){
              this.uploadArray.splice(index, 1);
            }
          }
        })
      }else{
        // existing images are sent to the service layer
        this.rncoService.DeleteProductImage(x).subscribe()
        // loop through file array
        this.fileArray.forEach((element, index) => {
          if(element.id == x){
            this.fileArray.splice(index, 1)
          }
        });
      }
    }
  }


  // align data gotten from route with product
  productAlign(){
    this.productName = this.productDetails['productName'];
    this.productCode = this.productDetails['productCode'];
    this.desc = this.productDetails['description'];
    this.unitPrice = this.productDetails['unitPrice'];
    this.quantity = this.productDetails['quantity'];
    this.category = this.productDetails['category'];
    this.duration = this.productDetails['deliveryDuration'];
    this.options = this.productDetails['deliveryOption'];
    this.deliveryPeriod = this.productDetails['deliveryPeriod'];
    // check if conversionType is percent
    if(this.paymentConfig['percent'] === true){
      this.conversionType = "PERCENT"
      // convert percent to number for rate
      this.rate = this.paymentConfig['rate'];
      this.amountPerConversion = (this.rate * this.unitPrice)/100 || this.paymentConfig['amountPerConversion'];
      this.payoutId = this.paymentConfig['id'];
      
    } else{
      this.conversionType = "AMOUNT"
      this.rate = this.paymentConfig['amountPerConversion'];
      this.amountPerConversion = this.productDetails['amoutPerConversion'];
      this.payoutId = this.productDetails['id'];
    }
  }

  validProduct: boolean;
   checkRate(){
   if ((this.conversionType == 'AMOUNT') && (this.rate > (0.5* this.unitPrice))) {
       this.notification.alertInfo("Commision amount cannot be greater than 50% of unit price")
       this.rate = null
   }
  if ((this.conversionType == 'PERCENT') && (this.rate > 50)) {
       this.notification.alertInfo("Commision percent cannot be greater than 50%")
      this.rate = null
   }
 }


uploadImage(event:any){
    const mimeType = event.target.files[0].type;
    // image Check
    if(event.target.files[0].size >= 1000000){
      alert("please your file should be less than 1mb")
      return false;
      // check if file is an image
    } else if (mimeType.match(/image\/*/) == null) {
        alert("Only images are supported");
        return;
    }else{
      this.productImage = event.target.files[0];
      // read file for image display
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (_event) => { 
        this.fileURL = reader.result;
        // check current file array 
        if(this.fileArray.length < 6){
          const x = this.fileArray.length + 1
          const fileLiteral = {
            id: x,
            imageUrl: this.fileURL
          }
          this.fileArray.push(fileLiteral)
        }else{
          this.notification.alertError('Only 6 images are allowed')
        }
      }
      // push images to upload Array
      this.uploadArray.push(this.productImage)
    }
  }

  submitform() {


  
    if (!this.productImage && !this.productName && !this.category && !this.productCode && !this.unitPrice && !this.quantity && !this.deliveryPeriod && !this.duration && !this.conversionType && !this.options &&
   !this.rate) {
     this.notification.alertInfo("Fields cannot be empty")
   } else if (this.uploadArray.length == 0  && this.fileArray.length == 0) {
          this.notification.alertInfo("Product Image cannot be empty")


   } else if (!this.productName || !this.productName.trim()) {
     this.notification.alertInfo("Product Name cannot be empty")
   } else if (!this.category || !this.category.trim()) {
     this.notification.alertInfo("Category cannot be empty")
   } else if (!this.productCode || !this.productCode.trim()) {
     this.notification.alertInfo("Product code cannot be empty")
   } else if (!this.unitPrice || !this.unitPrice.valueOf()) {
     this.notification.alertInfo("Unit Price cannot be empty")
   } else if (!this.quantity || !this.quantity.valueOf()) {
     this.notification.alertInfo("Quantity cannot be empty")
   } else if (!this.deliveryPeriod || !this.deliveryPeriod.valueOf()) {
     this.notification.alertInfo("Delivery period cannot be empty")
   }else if (!this.duration || !this.duration.valueOf()) {
     this.notification.alertInfo("Duration cannot be empty")
   } else if (!this.conversionType || !this.conversionType.trim()) {
     this.notification.alertInfo("commission type cannot be empty")
   } else if (!this.options || !this.options.trim()) {
     this.notification.alertInfo("Delivery options cannot be empty")
    } else if ((this.conversionType == 'AMOUNT') && (this.rate > (0.5* this.unitPrice))) {
       this.notification.alertInfo("Commision amount cannot be greater than 50% of unit price")
   }else if ((this.conversionType == 'PERCENT') && (this.rate > 50)) {
       this.notification.alertInfo("Commision percent cannot be greater than 50")
   } else {
          const pID = this.productID
        const MerchantId = parseInt(localStorage.getItem('userId'))
         const data = {
      id: pID,
      productName: this.productName,
      productCode: this.productCode,
      unitPrice: this.unitPrice,
      quantity: this.quantity,
      category: this.category,
      deliveryDuration: this.duration,
      deliveryOption: this.options,
      description: this.desc,
      deliveryPeriod: this.deliveryPeriod,
      productPayoutConfig: {
          id: this.payoutId,
           rate: this.conversionType == 'PERCENT' ? this.rate: null,
           conversionType: 'PPC',
           percent: this.conversionType == 'PERCENT' ? true: false,
             amountPerConversion: this.conversionType == 'AMOUNT' ? this.rate: null
      },
      merchant: {
        id: this.productDetails['merchant'].id
      }
    }

    //    if(this.uploadArray.length !== 0){
      this.uploadArray.forEach(file => {
        if (file !== '' || file !== undefined || file !== null){
          this.productFormData.append('files',file)
        }
      })
      this.productFormData.append('model', JSON.stringify(data))
      // call api and pass data
      this.rncoService.UpdateProductContentandImages(this.productFormData).subscribe((res)=>{
        this.notification.alertSucess('Product Edited Successfully')
      })

   }

    
       
    }
  // ==============Image Uploade functions & variables =============================
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  
  
 
}
