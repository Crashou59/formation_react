describe('My First Test Cypress', () => {
  it('Should user register', () => {
    cy.visit('/registration');
    expect(true).to.equal(true);
  });
});