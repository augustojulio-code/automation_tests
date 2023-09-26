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