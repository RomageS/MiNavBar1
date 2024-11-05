export const productList: product[] = [
    {id: 1, name: "cuaderno", price: 70, description: "cuaderno de raya de 100 hojas"},
    {id: 2, name: "libro", price: 560, description: "Learning Java for dummies"},
    {id: 3, name: "cartulina", price: 30, description: "cartulina de colores de temporada"},
    {id: 4, name: "lapiz", price: 15, description: "lapiz hb #2 pelicano"},
    {id: 5, name: "crayones", price: 70, description: "marca bic de varios colores"},
]

export interface product {
    id: number | string;
    name: string;
    price: number;
    description: string;
}