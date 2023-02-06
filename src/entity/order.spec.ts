import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrowError("Id is required")
  })

  it("should throw error when customerId is empty", () => {
    expect(() => {
      let order = new Order("123", "", []);
    }).toThrowError("CustomerId is required")
  })

  it("should throw error when item is empty", () => {
    expect(() => {
      let order = new Order("123", "123", []);
    }).toThrowError("Items are required")
  })

  it("should calculate total", () => {
    let item = new OrderItem("1", "abc", 10, 2, "p1")
    let item2 = new OrderItem("2", "abc", 20, 2, "p1")
    let order = new Order("123", "123", [item, item2]);

    const total = order.total()

    expect(total).toBe(60)
    
  })

 it("should validate true", () => {
    let item = new OrderItem("1", "abc", 10, 2, "p1")
    let item2 = new OrderItem("2", "abc", 20, 2, "p1")
    let order = new Order("123", "123", [item, item2]);

    expect(order.validate()).toBe(true)
    
  })

})