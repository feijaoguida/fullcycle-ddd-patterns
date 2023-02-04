import Address from "./address";

describe("Address unit tests", () => {
  it("should throw error when Street is empty", () => {
    expect(() => {
      let address = new Address("", 2, "75374-123", "Trindade")
    }).toThrowError("Street is required")
  })

  it("should throw error when number is empty", () => {
    expect(() => {
      let address = new Address("Rua TAl", 0 ,"75374-123", "Trindade")
    }).toThrowError("Number is required")
  })

  it("should throw error when zip is empty", () => {
    expect(() => {
      let address = new Address("Rua TAl", 2 ,"", "Trindade")
    }).toThrowError("Zip is required")
  })

  it("should throw error when City is empty", () => {
    expect(() => {
      let address = new Address("Rua TAl", 2 ,"75374-123", "")
    }).toThrowError("City is required")
  })

  it("should throw error when City is empty", () => {
    let address = new Address("Rua TAl", 2 ,"75374-123", "Trindade")
    expect(address.toString()).toBe("Rua TAl, 2, 75374-123 Trindade")
  })

})