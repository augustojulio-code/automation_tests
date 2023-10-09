let num = 10;
const num2 = 10;
var num3 = 10;
var nome = "Olá imbecil";

describe('Test expect', () => {

    it('Pass with let', function () {
        expect(5 + 5).to.equal(num)
    })

    it('Pass with const', function () {
        expect(5 + 5).to.equal(num2)
    })

    it('Pass with var', function () {
        expect(5 + 5).to.equal(num3)
    })

    it('Pass with string', () => {
        expect("Olá imbecil").to.equal(nome)
    })

})