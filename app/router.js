import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { ItemsController } from "./controllers/itemsController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: ItemsController,
    view: /*html*/`
    <section id="items" class="row justify-content-around">
    
    </section>

    <section id="" class="row justify-content-around">

    </section>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]