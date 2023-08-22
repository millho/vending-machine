import { AppState } from "../AppState.js"

export class Item {

    constructor({ name, price, picture, }) {
        this.name = name
        this.price = price
        this.picture = picture
    }

    get ItemTemplate() {
        return `
        <button onclick="app.ItemsController.buyItem('${this.name}')" class="btn col-3 text-center" ${this.Purchasable}>
        <h4>${this.name}</h4>
        <img src="${this.picture}"/>
        <h4>$${this.price}</h4>
        </button>`
    }

    get Purchasable() {
        if (AppState.money >= this.price) {
            return ''
        } {
            return 'disabled'
        }
    }


}