export default class Product {
  private _id: string;
  private _name: string;
  private _price: number

  constructor(id: string, name: string, price: number){
    this._id = id;
    this._name = name;
    this._price = price;
    this.validate()
  }

  changeName(name: string): void {
    this._name = name;
    this.validate();
  }

  get name(): string {
    return this._name
  }
  changePrice(price: number): void {
    this._price = price;
    this.validate();
  }

  get price(): number {
    return this._price
  }

  validate(): boolean {
    if (this._id.length === 0 ){
      throw new Error("Id is required")
    }
    if (this._name.length === 0 ){
      throw new Error("Name is required")
    }
    if (this._price < 0 ){
      throw new Error("Price must be greater than zero")
    }
   
    return true
  }



}