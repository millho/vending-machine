import { AppState } from "../AppState.js";
import { ItemsController } from "../controllers/itemsController.js";
import { Item } from "../models/items.js";

class ItemsService {

    addMoney() {
        AppState.money += 0.25
    }

    buyItem(itemName) {
        // console.log('buying item..');
        const purchasedItem = AppState.items.find(item => item.name == itemName)
        AppState.money -= purchasedItem.price
    }

}

export const itemsService = new ItemsService()