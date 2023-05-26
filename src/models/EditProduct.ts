export class EditProduct{
    id: number;
    unitPrice: number;
    quantity: number;
    deliveryDuration: number;
    deliveryPeriod: string;
    deliveryOption: string;
    description: string;
    productPayoutConfig: {
        id: number;
        rate: number;
        amountPerConversion: number;
        conversionType: string;
        percent: true;
    }
}