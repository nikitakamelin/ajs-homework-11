import Buyable from "../domain/Buyable";

export default class Cart {
	public _items: Buyable[] = [];

	add(item: Buyable): void {
		this._items.push(item);
	}
	get items(): Buyable[] {
		return [...this._items];
	}
	calculateTotalAmount(): number {
		let sum = 0;
		this._items.forEach(item => sum += item.price);
	
		return sum;
	}
	calculateWithDiscount(discountPercent: number): number {
		let sum = 0;
		this._items.forEach(item => {
			let price = item.price - item.price*discountPercent/100;
			sum += price;
		});

		return sum;
	}
	removeItem(id: number): void {
		this._items = this._items.filter(item => item.id !== id);
	} 


}