export class CreateProduct{
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
    productPayoutConfig: {
        rate: number;
        conversionType: string;
        percent: boolean
        amountPerConversion: number;
    };
    merchant: {
        id: number
    }
}