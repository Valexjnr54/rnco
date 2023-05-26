export class CreateAffiliateBusiness {
    website: string;
    code: string;
    address: {
        street: string;
        city: string;
        lga: string;
        state: string;
        country: string
    }
}