describe('My First Test Cypress', () => {
  it('Should user register', () => {
    cy.visit('/registration');
    cy.get('[data-cy=nickname]')
    .then(elem => {
    elem.val('my nickname');
	});

	cy.get('[data-cy=nom]')
    .then(elem => {
    elem.val('my name');
	});

	cy.get('[data-cy=prenom]')
    .then(elem => {
    elem.val('my firt name');
	});

	cy.get('[data-cy=select]').select('F');

  });
});