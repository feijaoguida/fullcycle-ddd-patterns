import Customer from "../entity/customer"
import Order from "../entity/order"
import OrderItem from "../entity/order_item"
import OrderService from "./order.service"

describe("Order service unit Tests", () => {
  it("should place an order", () => {
    const customer = new Customer("c1", "Customer 1");
    const item1 = new OrderItem("i1", "Item 2", 10, 1,'p1')
    const order = OrderService.placeOrder(customer, [item1])

    expect(customer.rewardPoints).toBe(5)
    expect(order.total()).toBe(10)
  })
  it("should throw error place an order without item", () => {
    const customer = new Customer("c1", "Customer 1");
    const item1 = new OrderItem("i1", "Item 2", 10, 1,'p1')
    

    expect(() => {
      OrderService.placeOrder(customer, [])
    }).toThrowError("Order must have at least one item")
  })

  it("should get total of all orders", () => {
    const item1 = new OrderItem("i1", "Item 2", 100, 1,'p1')
    const item2 = new OrderItem("i2", "Item 2", 200, 2,'p2')

    const order = new Order('o1', 'c1', [item1])
    const order2 = new Order('o2', 'c1', [item2])

    const total = OrderService.total([order, order2]);

    expect(total).toBe(500)
  })
})