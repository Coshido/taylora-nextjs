interface Product {
    model: string,
    color: string,
    accessories: string[],
    price: number
}

interface Data {
    id: number;
    model: string;
    basePrice: number;
    variations: {
        color: string;
        colorHex: string;
        price: number;
        image: string;
    }[];
    accessories: {
        optional: string;
        price: number;
    }[];
}

type DataArray = Data[];