
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('localhost:3000/')
    cy.get('[data-testid="7676a4bf-adfe-415c-941b-1739af07039b"]').click()
  })
})