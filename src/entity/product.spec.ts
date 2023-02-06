import Product from "./product";

describe("Product unit tests", () => {
  it("should return validate true", () => {
    
      let product = new Product("123", "Product1", 100);
      expect(product.validate()).toBe(true)
   
  })

  it("should throw error when id is empty", () => {
    expect(() => {
      let product = new Product("", "Product1", 100);
    }).toThrowError("Id is required")
  })

  it("should throw error when name is empty", () => {
    expect(() => {
      let product = new Product("123", "", 100);
    }).toThrowError("Name is required")
  })

  it("should throw error when Price is less than zero", () => {
    expect(() => {
      let product = new Product("123", "Product1", -1);
    }).toThrowError("Price must be greater than zero")
  })

  it("should change name", () => {
    const product = new Product("123", "Product1", 1);
    product.changeName("Product 2");
    expect(product.name).toBe("Product 2")
  })

  it("should change price", () => {
    const product = new Product("123", "Product1", 1);
    product.changePrice(2);
    expect(product.price).toBe(2)
  })
})