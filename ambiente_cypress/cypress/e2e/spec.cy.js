
var numero = 2;
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Test expect', () => {
  it('Pass', function () {
    expect(true).to.equal(true)
  })
})

describe('Test expect number', () => {
  it('Pass number', function () {
    expect(numero).to.equal(2)
  })
})