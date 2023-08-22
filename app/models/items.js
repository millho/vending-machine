export class Item {

    constructor({ name, price, picture, }) {
        this.name = name
        this.price = price
        this.picture = picture
    }

    get ItemTemplate() {
        return `
        <div class="col-4 text-center">
        <h4>${this.name}</h4>
        <img src="${this.picture}">
        <h4>${this.price}</h4>
        </div>`
    }


}