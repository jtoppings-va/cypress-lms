

describe('Some Tests', () => {
  it('should open application', () => {
    cy.visit('http://localhost:4200/');
  });

  it('should correctly display hero when match is found when searching, and take you to details page when clicked', () => {
    cy.visit('http://localhost:4200/');
    cy.get('[data-testid=hero-search-input]').type('Tornado');
    cy.get('[data-testid=hero-item-0]').click();
    cy.url().should('eq', 'http://localhost:4200/detail/20');
  });

  it('should clear messages when button is clicked', () => {
    cy.visit('http://localhost:4200/');
    cy.get('[data-testid=hero-search-input]').type('Fake Hero');

    // TODO: complete test
  });
});
