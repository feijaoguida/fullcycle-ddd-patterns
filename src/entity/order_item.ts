export default class OrderItem{
  private _id: string;
  private _productId: string
  private _name: string;
  private _price: number;
  private _quantity: number

  constructor(id: string, name: string, price: number, quantity: number, productId: string){
    this._id = id;
    this._name = name;
    this._price = price;
    this._quantity = quantity;
    this._productId = productId;
    this.validate()
  }

  validate() {
    if (this._id.length === 0 ){
      throw new Error("Id is required")
    }
    if (this._name.length === 0 ){
      throw new Error("Name is required")
    }
    if (this._price === 0 ){
      throw new Error("Price is required")
    }
    if (this._productId.length === 0 ){
      throw new Error("ProductId is required")
    }
    if (this._quantity <= 0 ){
      throw new Error("quantity must be greater than zero")
    }
    return true
  }

  get price(): number {
    return this._price
  }

  orderItemTotal(): number {
    return this._price * this._quantity;
  }

}