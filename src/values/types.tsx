interface ProductType {
    id: number;
    details: {
        "id"?: number,
        "vendor": {
            "id": number,
            "name": string,
            "website": string,
            "logo_url": string
        },
        "url": string,
        "discount_available": boolean,
        "warranty": string,
        "inventory_state": string,
        "product": number,
        "registered_prices": number[];
    }[];
    image_url: string;
    name: string;
    ref: string;
    characteristics: any;
    popularity: number;
    category: number;
    minimum_price: number;
}

export default ProductType;