import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { itemsService } from "../services/itemServices.js";

export class ItemsController {

    constructor() {
        this.drawItems()
        this.drawMoney()
    }

    drawItems() {
        const items = AppState.items
        let content = ''
        items.forEach(item => content += item.ItemTemplate)
        setHTML('items', content)
    }

    drawMoney() {
        let bank = `<div class="col-6 text-center"><h4>$${AppState.money}</h4></div>
        <button onclick="app.ItemsController.addMoney()" class="btn btn-primary"> add quarter </button>`

        setHTML('money', bank)
    }

    addMoney() {
        itemsService.addMoney()
        this.drawMoney()
    }
}