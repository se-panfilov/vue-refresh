export interface Item {
  id: number
  price: number
  title: string
  desc: string
}

export interface BasketItem extends Item {
  quantity: number
}
