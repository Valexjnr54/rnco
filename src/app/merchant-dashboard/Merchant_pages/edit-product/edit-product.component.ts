import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
import { NotificationService } from 'app/services/notification';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  constructor(
    public notification: NotificationService,
    public rncoService: RncoService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.getUserId();
    this.getProductID();
   
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  // product payment config;
  paymentConfig: object;
  // from route begin=========================================
  productID: string
  productDetails: any
  // from route end===========================================
  productName: string;
  productCode: string;
  unitPrice: number;
  quantity: number;
  deliveryDuration: number;
  deliveryOption: string;
  brandName: string;
  category: string;
  description: string;
  deliveryPeriod: string;
  // productPayoutConfig: {
      amountPerConversion: number;
      rate: number;
      conversionType: string;
      percent: boolean;
      payoutId: number;
  // };
  userId: number
  productImages:any = []
  productImage: File = null;
  fileUrlArray = []
  fileArray = []
  uploadArray = []
  ImageAdded= false;
  fileURL:any
  productFormData = new FormData();
  // default value
  // functions
  getUserId(){
    const userString = localStorage.getItem('userId')  
    this.userId = parseInt(userString)
  }
  getProductID(){
    this.route.queryParams.subscribe(params=>{
      this.productID = params.id;
      this.getProductDetails(this.productID)
    })
  }
  getProductDetails(id){
    this.rncoService.GetAnyProduct(id).subscribe((res)=>{
      this.productDetails = res
      this.paymentConfig = res['productPayoutConfig']
      // get product images
      // loop through response 
      console.log(res);
      this.productImages = res['productImages']
      for (let index = 0; index < this.productImages.length; index++) {
        const images = this.productImages[index];
        this.fileUrlArray.push(images['imageUrl'])
        this.fileArray.push(images)
        // convert product images to url and store in seperate array for editing
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

  validProduct: boolean;
  checkRate(){
    if(this.conversionType == 'AMOUNT'){
      if(this.rate >= this.unitPrice){
        this.validProduct = false
        this.notification.alertInfo("Commission can't be greater or equal to Price")
      }else{
        this.validProduct = true
      }
    } else if(this.conversionType == 'PERCENT'){
      if(this.rate > 50){
        this.validProduct = false;
        this.notification.alertInfo("Commission can't be greater or equal to 50 percent")
      } else{
        this.validProduct = true
      }
    }
  }
  // align data gotten from route with product
  productAlign(){
    this.productName = this.productDetails['productName'];
    this.productCode = this.productDetails['productCode'];
    this.description = this.productDetails['description'];
    this.unitPrice = this.productDetails['unitPrice'];
    this.quantity = this.productDetails['quantity'];
    this.category = this.productDetails['category'];
    this.deliveryDuration = this.productDetails['deliveryDuration'];
    this.deliveryOption = this.productDetails['deliveryOption'];
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
  submitform(){
    if(this.conversionType == 'PERCENT'){
      this.percent = true;
    } else if( this.conversionType == 'AMOUNT'){
      this.percent = false;
    }else if(!this.productName 
      && !this.productCode
       && !this.unitPrice 
       && !this.quantity
       && !this.deliveryDuration
       && !this.deliveryOption
       && !this.category
       && !this.deliveryPeriod
       && !this.rate){
        this.notification.alertInfo('Fields cannot be empty');
       }else if(!this.productName || !this.productName.trim()){
        this.notification.alertInfo("Product Name cannot be empty")
       }else if(!this.productCode || !this.productCode.trim()){
        this.notification.alertInfo("Product Code cannot be empty")
       }else if(!this.unitPrice){
        this.notification.alertInfo("Unit Price cannot be empty")
       }else if(!this.quantity){
        this.notification.alertInfo("Quantity cannot be empty")
       }else if(!this.deliveryDuration){
        this.notification.alertInfo("Delivery Duration cannot be empty")
       }else if(!this.deliveryOption){
        this.notification.alertInfo("Delivery Option cannot be empty")
       }else if(!this.category){
        this.notification.alertInfo("Category cannot be empty")
       }else if(!this.deliveryPeriod){
        this.notification.alertInfo("Delivery Period cannot be empty")
       }else if(!this.rate){
        this.notification.alertInfo("Rate cannot be empty")
       }else{

        const pID = this.productID
    const MerchantId = parseInt(localStorage.getItem('userId'))
    const data = {
      id: pID,
      productName: this.productName,
      productCode: this.productCode,
      unitPrice: this.unitPrice,
      quantity: this.quantity,
      deliveryDuration: this.deliveryDuration,
      deliveryOption: this.deliveryOption,
      description: this.description,
      deliveryPeriod: this.deliveryPeriod,
      productPayoutConfig: {
          amoutPerConversion: this.amountPerConversion,
          rate: this.rate,
          conversionType: 'PPC',
          percent: true,
      },
      merchant: {
        id: MerchantId
      }
    }
    console.log(data)
    // check if the file array is empty 
    // if yes call the update product API 
    if(this.uploadArray.length !== 0){
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
    } else{
      // If No call the update just product API
      this.rncoService.UpdateOnlyProductContent(data, this.productID).subscribe((res)=>{
        this.notification.alertSucess('Product Edited Successfully')
      })
    }
       }
    
  }
  // ==============Image Upload functions & variables =============================
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  
  
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
}
