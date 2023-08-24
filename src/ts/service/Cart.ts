import Buyable from "../domain/Buyable";

export default class Cart {
	private _items: Buyable[] = [];

	add(item: Buyable): void {
		this._items.push(item);
	}
	get items(): Buyable[] {
		return [...this._items];
	}
	calculateTotalAmount(): number {
		let sum = 0;
		this._items.forEach(item => sum += item.price);

		//! -- ошибка через reduce --
		//this._items.reduce((acc, current) => acc + current, 0);

		return sum;
	}
	calculateWithDiscount(discountPercent: number): number {
		return this.calculateTotalAmount() - this.calculateTotalAmount() * discountPercent/100;
	}
	removeItem(id: number): void {
		this._items = this._items.filter(item => item.id !== id);
	} 
}