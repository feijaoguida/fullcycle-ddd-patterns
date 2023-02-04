import OrderItem from "./order_item";

describe("Order_item unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let order = new OrderItem("", "abc", 2);
    }).toThrowError("Id is required")
  })

  it("should throw error when name is empty", () => {
    expect(() => {
      let order = new OrderItem("123", "", 2);
    }).toThrowError("Name is required")
  })

  it("should throw error when price is empty", () => {
    expect(() => {
      let order = new OrderItem("123", "abc", 0);
    }).toThrowError("Price is required")
  })

  it("should calculate total", () => {
    let item = new OrderItem("1", "abc", 10)
    expect(item.validate()).toBe(true)
  })

  it("should throw error when price is empty", () => {
    let item = new OrderItem("1", "abc", 10)
    expect(item.price).toBe(10)
  })

})