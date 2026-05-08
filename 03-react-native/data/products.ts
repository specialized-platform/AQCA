export type Product = {
    id: string,
    name: string,
    price: number,
    image?: string,
    description: string
};


export const PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Sneakers',
        price: 100000,
        image: "",
        description: "Sangat nyaman sekali untuk kaki anda.",
    },
    {
        id: '2',
        name: 'Sarung',
        price: 1000,
        image: "",
        description: "Sangat nyaman sekali untuk ibadah anda.",
    },
    {
        id: '3',
        name: 'Keyboard',
        price: 4000,
        image: "",
        description: "Sangat nyaman sekali untuk tangan anda.",
    },
]