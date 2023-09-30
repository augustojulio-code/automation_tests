describe('Test String', () => {
    it('Pass', function () {
        expect("Olá imbecil").to.equal("Olá imbecil");
    })
})

describe('Open Ui', () => {
    it('Pass', () => {
        cy.visit('https://www.google.com.br/')

        cy.get('#APjFqb').type('Olá imbecil')
        cy.get('input[class="gNO89b"]').click({ multiple: true, force: true })
    })
})