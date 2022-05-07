import { getRandom, getRandomInt } from "../domain/galery/randommn";
import { CoordinatesMoscow } from "../domain/galery/coordinates";

export interface Product {
    name: string;
    price: number;
    description: string;
    image: string;
    adress: string;
    coordinates: Array<number>;
}

export const PRODUCT_PLACEHOLER = {
    name: "name not set",
    price: 0,
    description: "",
    image: "",
    adress: "",
    coordinates: [0, 0]
}

export function getRandomProducts(): Product[] {
    return new Array<Product>(50).fill({
        name: "name not set",
        price: 0,
        description: "",
        image: "",
        adress: "",
        coordinates: [0, 0]
    }).map((value: Product, index: number) => {
        value = {
            name: NAMES[getRandomInt(0, NAMES.length)],
            price: getRandomInt(100, 10000),
            description: "Рюкзак унисекс,  большое  внутреннее отделение из молнии, также имеются боковоые карманы",
            image: IMAGES[getRandomInt(0, IMAGES.length)],
            adress: "some address",
            coordinates: [CoordinatesMoscow().latitude, CoordinatesMoscow().longitude]
        }
        return value;
    })
}



const IMAGES = [
    "https://images.wbstatic.net/big/new/10710000/10716773-1.jpg",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0PDw8PDw0QDQ8QDQ8NDw8NEBINDQ0NFREWFhUSFRUYHSggGBolGxUVITEhJSkrMC4uGB8zODUsNygtOi0BCgoKDg0OFxAPFy0dHR0tLS8rKystKysrLy0tLSstLTA3KysrLS0uLS0tLS0tLS0tLS0rLS0wLSsrLS0rLSstMv/AABEIAPsAyQMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQMEBgIFB//EAEUQAAIBAgIECQgGCQQDAAAAAAABAgMRBBIFITFRBkFTYXGBkaGxBxMUIiRyksEzQlKistEyRFRiY4Lh8PE0hJPCI0Nz/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAAICAgMBAAAAAAAAAAAAAQIRAzESITJBUSL/2gAMAwEAAhEDEQA/AP2EAAAAAAAAAoEAKBACgQFIAAAAFIABSAACgQAoEBSAUgAApABQQAUEAFBABQQAUEAFIABSAAUEAApAAAAFIABQQAUEAFBABQQAUEAFNXH4+lQjmnJLpNlvj3azn6eGjisTJ1PWp01fI7OnKTepNPda/UYyys9T7S14hwtptpulNQcsmdwahfpPvYXEwqxUoNNNJq2vU+M9ypxccjinFrK4tJxa3WPhaOXmK86S/QU/Vu7+rL/KJu42bu09x0ABDo0oIAKCACggAoIAKCACgAAAAAAAAAAAamM0lQoq86kV1ktk7GTGzy05Pmsc1ofTNGl5yUryhKvClKrGVPzdOT2XvJOWuSvlTtrvsZraXqrGv1liq1Hio0v/AAYeXvS1Ofae8NSlTt5rRtKna1nKdPNqVldq7ONznltjft9nH8JMNQqVIS1xpU41Ks4zpeopPig5ZpW2vKnt43qNbH1IvEKUJKUZRVpRalF6lsaNaUsS9bw1DVvqX/6nmcql8zwVpXu50KkFJve9azdaZM8/KaLdusi7pPekwfEocIKcElWp1aVklmqQaXatR9TC46jVV6dSM1zNM7TOX7aljOCg0qAoAgKAICgCAoAhQAAAAAAAYcTiYUouU5KKW8mNxUKMHObsku05eU5V2q1Zepto0Xsa4pyXgjnnn4s26beJ0jXr/Rv0ei/ryV6k1+7HdzvvNalRoweZRzz5Sr68+q+zqE6jk9bIkea5WsbZ3Xb4yecZiQJsZfOMece8xgbGeNdmKphKE3my+bnylJ+bqX6Vt67kLFl2Nmhj8Rh/pfaaK/8AZFWrU1vlFbVzrsPuYbEQqxU4SUotXTWs5+nVaJeVCTrUFeO2tRWyS45xW/euPpO2PJpqV0oMODxUK0FODvFq+ozneXbaAoAgKAICgCFAAAAASUkk29i1lPi8KNIeZou21rYtvMiZXU2lunycfivS8Q4v6ChZzXFOp9WHzfVvPVSbk7sw4ag6VKMH+m/XqPfVlrl2bOhIypHjyu3OqkUFMoFsAFAUAQAAUyUqrTMZCyi4es8LXTX0FeVmuKnW+Se3pudTGSautj1nLzgqkJU5bJK1+OL4mudOzPpcHcY508k/pKbcJL95an1cfWd+PL3prGvrAoO7aAoAgKAAIUAAABxumqvnsXShtipOq/dhrX3sh1uKnlhJ83ecVhZZsRXn9mEaa6ZNt/hicea9RjJtyd2VHlHpHmYUpABSkKFAAUUEAFAKBEyYOr5rGJ7I1oJv34erL7rj2FZq6SlZUqnJ1o392XqPva7Cy6V2gMWGnmhGW+K7TIe10UEAFBAAAAAAAaOmqmWl0vuRyWi9cKsvt159kUoeMWfe4S1rerujc+Dop+z0v3k59cpOXzPLy3+nPLtto9I8pno5MqW55KFegQXAoILgegS4RRSkR6SCozU0ovZ63NTcl0x9ZeBuWMOMhmpVY8bpVEuuLA+/oOrmox/varn0D4PA+tmw8eeEJdx909fHd4xudKCA2qggAAAAVEKgOT4U1fpX9mEu6Jp0IZYQj9mEY9ise+ErbVZfabj2uwqu2o8Wfdcr2KR6zGrVqNLVrexdJ9ilhqOWN4Qk8qveKeuxJNpGg60d6J6RHefQlhsPyFP4EefQ8LyMPhQ8V00fSI7x6RHejdeCwvIw7Ceg4XkYfCNDSeJjvQ9JjvN30HC8hT+FFWBwn7PT+BDxNNJYiO89LER3o3VgsL+z0vgj+RfQsJ+z0v8Ajj+Q8VasK0d5ljUjvMywmF5Cl/xx/I9xw2Gv9DT+CJfGjErbzxOO3nTXceKqUas4xVoWi4pbFqs/AyQesCcBXahBfwkuw6g5Tgh6qpx5pR7L/kdWejh+LWPQADq0AAAAABUQqA4zTKedLVrrQvtT1zWqxr1Za2bGmfpoLfXj3Sv8jWqrWzw5duVeFtj7yfebWj8W3FRbd46nfa431M1HLWuleJNcJKS4r3W9X1oiPsZxmMEZX6LXXQerhWXMMxiuW4VkzDMY7i5RlzDMYrlIrJmPWcxJnmrLVZbX3IqPM5Xlfmt2NntMwpa+3xZlRA4OytVadtVeolrd7OT5jrDkNFq1b/cP8R2B6eHqtYoADs0ApAAAAFRCoDidMu+Io89f5NmKrtZl0qvaKPNVf4JGKrtfSeHLtxrXntj70fE2pRua9vWj7y8TctqIPGGlZuHXH5ozpmvUp8aMNSFXiqSXWwr6Fxc+U1X5SXayNYjlZ9oNvr3Fz46WI5Wfaz0o4jlZ9oNvrXQufLjHEcrLtPeSvy0gu30bnla9ZipKdrSk5dJnigJJa+3xPSEggGj1fEW3Vov7sWdazldGr2l+/B/cR1R6eHqtYoADs0AAAAABUQqA4zSsfaKf/wBZfhka9XabGlH7TBfxp/gmYKm1nhy7cawr9KPvR8TdSNL60fej4m8QRoNHoFV4yDIeykNMeQ9ZT0EF08qJ6UT0kVICJHqwKiq8z2hCptCIjNope1W5oS+6/wAjp2czon/V/wAkPCR0zPTw9NYoADs0AAAAABUQAcXpXVilzVpd8ZL5mGe0z6b/ANTLmqxfb/k1mzw5d1xrz9aPvLxN5GlfWuleJvCEAChUI5rn7GeltXSvEy06StH1b6lrb5grX84ufsZ6Ul/aNnzUPso8yox+xEDHFHoxxSTslZa/xMyACoFAx1dq6wiVdq6wiI29Dx9pk90Y/hf5nRs5zQLviKvM0uynE6M9XD8W8ekAB1aUgAAAAARnmTA5LhIrYhvfUpd7ijRke+HvpF6bpRsrwlKtJZqdLLK7zdR8N6alH9KdCfOpOn3azyZ4+65ZdvtKLbXSvE32cwuEVJbXDqqL5oVeF9FbakF0yp/mYiR01xc4urw7wsf1in8UWa8vKFheXj2Iur+Lt3bl3NMxVcVUS9WKailKV5Wy001mkklrsru25M4SXD/DvZXj3IU+H1CMlJV4XTTWzahJfuEd68XB6/SIpc0JP/sYqGOc5Sy+vTUrRqJygptJZrRd9Sbcb31uMtzPl0ILEKjUwy9nxEHUVXK5UcKkr1FUlsSjtV7Xjl4z4GL4eYCnUnCFRxhB+ainFtxjHUk9W3a3vk5PjNeNm/TVmnepnpM/Pl5RcHy33f6HteUXBct93+hnxv4jv1IuY4SHlBwT/WF12j8jZpcN8LLZiKP81eMfkTV/E266rxdZDn6fCWM9lTDP/cp+ETZpaTUtuKpQX8NKbX80nbuIj7vBSrmq13+/PusvkdScxwPwM6UJuUs+apJwm7Zpwk812lsd3bqOmievimsXTHpQUHRpAABSFAEI0UAamM0dSrRcakIzi9sZpST6mc9iOAOip63gMP1Uor5HWCwHDz8muiH+p0l0Rsa9XyXaJezDRj0Hf2GVAfmVXySaPeyOXoRqz8juC4pyR+r5UeXAD8iqeRzD/VqPrRrz8j8Fx36D9kyDITRpwOguC1fC4KvgoVJxp1Nj44pu7S5r3+J35vgQ8keH5+s/XfNjzY0Pyqn5IsJxv5mePkiwHHdn6fkGQaNPzil5J9GLbDN0m/h/JromO3CU5+9G53ORBQKOUo8BNEx2YDD9dKL8T6GG4LYCnrhg8PB740aafgfcylAxUaEYqyVluWwzWIAKQAAAABQAICgCAIoEAKBACgQFIABQBAAAAAAAAAAAAAAAAf/Z",
    "https://aquatic.net.ru/wp-content/uploads/2019/12/rd-04h.jpg",
    "https://arnypraht.com/assets/components/phpthumbof/cache/195-black1111.911e7f35aa345853ac28b2cd52b5b5ff.jpg",
    "https://cdn.frogogo.ru/5172264813f33bebd95d72a1087e0ac8.jpg",
    "https://image-cdn.kazanexpress.ru/c2n2kh2vjs0d55pttumg/original.jpg",
    "https://static.fix-price.ru/upload/resize_cache/iblock/da8/1000_1000_2/da8f8269b99bf2607144fa0bff5f901c.jpg",
    "https://lacoste.ru/upload/resize_cache/catalog/800_800_1/NH2583HC000.jpg",
    "https://api.xd-design.ru/upload/iblock/91a/91aec18fe921894fb29f6566e5b5eb66.jpg",
    "https://www.werfstore.ru/wp-content/uploads/2019/12/img_6987.png",
    "https://www.splav.ru/upload/resize_cache/webp/iblock/bc7/bc71dd21874952d53dead281d27f1c70.webp",
    "https://friendfunction.ru/upload/resize_cache/iblock/60d/1000_1000_13a38aab6457ec8a192e49fcdfc20568a/ryukzak_fjallraven_kanken_plum_420_1.jpg",
    "https://www.gruppa99.com/upload/resize_cache/iblock/9e4/512_700_1/9e4c56ec3dd91aba1d5e4549f6dd53f3.png",
    "https://cdn.skechers.ru/upload/mdm/media_content/resize/e7f/462_409_1b88/46875860299.jpg",
    "https://7bad2fae-48b8-4e4a-a1ed-da720287805e.selcdn.net/uploads/image/12738-58136c33568492.43712117-jpg/700x979-1_2946214949.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvKPs2H8O7gIBBEDkkaeoHXbOfwIHHyrKVA&usqp=CAU",
    "https://www.splav.ru/upload/resize_cache/webp/upload/iblock/52c/ituhmt6o9df773yizygny1vq6dtigx7o.webp",
    "https://img.akusherstvo.ru/images/magaz/forest-sumka-ryukzak-dlya-mamy-tarde_green-1377403.jpg",
    "https://img.joomcdn.net/1f2eb7556d574949265d9fa6d95f9be06bab3bff_original.jpeg",
    "https://cdn1.ozone.ru/s3/multimedia-4/6075285364.jpg",
    "https://contents.mediadecathlon.com/p754623/kd4dc704cf15cdafe2628b2110c496dbe/754623_default.jpg?format=auto&quality=60&f=800x0",
    "https://cdn.aizel.ru/i/550x826/1292821.jpg",
    "https://arnypraht.com/assets/components/phpthumbof/cache/238-aqua-1.84638aad30c25d33a31e3a8948e3bd04.jpg",
    "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_1200,h_1200,c_pad,b_white,d_photoiscoming.png/LMCode/82219663.jpg",
    "https://minecraft.cdnvideo.ru/image/cache/catalog/products/aksessuari/ryukzak_kriper-1200x1200.jpg",
    "https://cdn1.ozone.ru/s3/multimedia-8/c1200/6007027604.jpg",
    "https://www.be-in.ru/media/beingallery/gallary/things/2020/09/05/%D0%B1%D0%BE%D0%B1%D1%8B%D0%BB%D0%B5%D0%B2%D0%BE.png",
    "https://marmalato.ru/upload/iblock/252/252f2be22289814eb032c2ad51650d37.jpg"
]

const NAMES = [
    "Рюкзак"
]


