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
        "unit_price": number,
        "discount_available": boolean,
        "warranty": string,
        "inventory_state": string,
        "product": number,
        "min_registered_prices": { "data": number[] };
    }[];
    image_url: string;
    name: string;
    ref: string;
    characteristics: any;
    popularity: number;
    category: number;
}

export default ProductType;