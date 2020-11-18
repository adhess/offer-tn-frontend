

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
        "images": {"src": string}[],
        "url": string,
        "unit_price": number,
        "discount_available": boolean,
        "warranty": string,
        "inventory_state": string,
        "product": number
    }[];
    one_image: {src: string};
    name: string;
    ref: string;
    characteristics: {
        "OS": string,
        "RAM": string,
        "color": string,
        "Screen": string,
        "Processor": string,
        "Graphic card": string
    },
    popularity: number;
    category: number;
}

export default ProductType;