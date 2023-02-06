import OrderItem from "./order_item";

describe("Order_item unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let item = new OrderItem("", "abc", 2, 1, "p1");
    }).toThrowError("Id is required")
  })

  it("should throw error when name is empty", () => {
    expect(() => {
      let item = new OrderItem("123", "", 2, 1, "p1");
    }).toThrowError("Name is required")
  })

  it("should throw error when price is empty", () => {
    expect(() => {
      let item = new OrderItem("123", "abc", 0, 1, "p1");
    }).toThrowError("Price is required")
  })

  it("should throw error when ProductId is empty", () => {
    expect(() => {
      let item = new OrderItem("123", "abc", 1, 1, "");
    }).toThrowError("ProductId is required")
  })

  it("should throw error when quantity is less zero", () => {
    expect(() => {
      let item = new OrderItem("123", "abc", 1, 0, "p1");
    }).toThrowError("quantity must be greater than zero")
  })

  it("should return true when item ok", () => {
    let item = new OrderItem("1", "abc", 10, 2, "p1")
    expect(item.validate()).toBe(true)
  })

  it("should throw error when price is empty", () => {
    let item = new OrderItem("1", "abc", 10, 2, "p1")
    expect(item.price).toBe(10)
  })

})