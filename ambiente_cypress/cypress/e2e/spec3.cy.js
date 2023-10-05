let num = 10;
const num2 = 10;
var num3 = 10;

describe('Test expect', () => {

    it('Pass with let', function () {
        expect(5 + 5).to.equal(num)
    })

    it('Pass with const', function () {
        expect(5 + 5).to.equal(num)
    })

    it('Pass with var', function () {
        expect(5 + 5).to.equal(num)
    })
})