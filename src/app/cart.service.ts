import { Injectable } from "@angular/core";
import { iarrays } from "./iarrays";


@Injectable({
    providedIn: 'root'
})

export class CartService {
    cart: iarrays[] = [];
    constructor(){}

    addToCart(obj: iarrays){
        this.cart.push(obj);
    }

    getCart(){
        return this.cart;
    }

    clearCart(){
        this.cart = [];
        return this.cart;
    }

    calculateTotal(){
        let total: number = 0;
        for(let val of this.cart) {
            total = total + val.price;
        }
        return total;
    }
// get the length of elements in cart (docheck)
    getLength(){
        return this.cart.length;
    }
// delete all
    clearItems(){
        this.cart = [];
        return this.cart
      }
// delete just one item
    deleteElment( ){
        this.cart.splice(0,1);
        return this.cart ;
      }

    
}