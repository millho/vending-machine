import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"
import { Item } from "./models/items.js"


class ObservableAppState extends EventEmitter {

  money = 0

  item = [
    new Item({ name: 'potato', price: '$1', picture: 'https://images.unsplash.com/photo-1617130094141-532436117aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG90YXRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' }),

    new Item({ name: 'onion', price: '$1', picture: 'https://images.unsplash.com/photo-1587735243474-5426387356db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9uaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' }),

    new Item({ name: 'garlic', price: '$1', picture: 'https://images.unsplash.com/photo-1587049693270-c7560da11218?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhcmxpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' })
  ]

  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
