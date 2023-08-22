import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { ItemsService } from "../services/itemServices.js";

export class ItemsController {
    constructor() {
        this.drawItems()
    }

    drawItems() {
        const items = AppState.items
        let content = ''
        items.forEach(item => content += item.ItemTemplate)
        setHTML('items', content)
    }

    addMoney() {
        let money = AppState.money
        money += 0.25
    }
}