import { CartItem } from "./Cartitem";

export class Cart {
    items: CartItem[] = [];

    get Totalprice(): Number {
        let Totalprice = 0;
        this.items.forEach(item => {
            Totalprice =Totalprice + item.price;

        });
        return Totalprice;
    }
}