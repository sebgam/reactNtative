const User = require("./User")
// @ponicode
describe("enviar", () => {
    let inst

    beforeEach(() => {
        inst = new User.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.enviar()
        }
    
        expect(callFunction).not.toThrow()
    })
})
