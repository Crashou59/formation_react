describe('My First Test Cypress', () => {
  it('Should user register', () => {
    cy.visit('/registration');
    cy.get('[data-cy=nickname]').type('my nickname');

    cy.get('[data-cy=nom]').type('my name');

    cy.get('[data-cy=prenom]').type('my first name');

    cy.get('[data-cy=select]').select('H');
    cy.get('button').should('be.enabled').click();

    cy.get('[data-cy=nom]').should('be.empty');


  });
});