import { AppState } from "../AppState.js";
import { ItemsController } from "../controllers/itemsController.js";
import { Item } from "../models/items.js";

class ItemsService {

    addMoney() {
        AppState.money += 0.25
    }

}

export const itemsService = new ItemsService()