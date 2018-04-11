describe('test', () => {
  it('fails if you try to run me in other resolutions than the original', () => {
    cy.visit('http://localhost:8080');
    cy.matchScreenshot('testing');
  })
})