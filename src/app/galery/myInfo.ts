export interface Product {
    name: string;
    price: number;
    description: string;
    image: string;
    adress: string;
    coordinates: Array<number>;
}

export const DEFAULT_PRODUCTS = new Array<Product>(50).fill({
    name: 'popit',
    price: 100,
    description: "Игрушка антистресс нового поколения, которая понравится, как детям, так и взрослым.",
    image:"https://images.deal.by/240691713_w300_h300_detskaya-igrushka-pupyrka.jpg",
    adress:"Moscow",
    coordinates: [37.428645, 55.876448, 37.835122, 55.653490]
});



