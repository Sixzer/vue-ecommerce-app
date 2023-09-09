interface IRating {
    rate: number;
    count: number;
}
export interface ITovar {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: IRating;
}
