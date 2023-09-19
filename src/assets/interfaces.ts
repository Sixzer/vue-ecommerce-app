interface IRating {
    rate: number;
    count: number;
}
export interface IProduct {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: IRating;
}

export interface ICartProduct extends IProduct {
    quantity: number;
}
