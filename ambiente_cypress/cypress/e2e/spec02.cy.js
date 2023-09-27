describe('Test String', () => {
    it('Pass', function () {
        expect("Olá imbecil").to.equal("Olá imbecil");
    })
})

describe('Open Ui', () => {
    it('Pass', () => {
        cy.visit('https://www.saucedemo.com/')
    })
})