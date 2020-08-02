describe('Default tests', () => {
  it('should display valid heading one', () => {
    cy.visit('/');
    cy.contains('h1', 'Vortexgear Race 3 - 75% Mechanical Keyboard');
  });
});
