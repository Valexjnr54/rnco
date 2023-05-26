export class CreateMerchantBusiness {
    website: string;
    code: string;
    businessName: string;
    merchantConfig: {
        channel: string;
        payment: string;
        payoutProvider: string
    };
    address: {
        street: string;
        city: string;
        lga: string;
        state: string;
        country: string
    }
}