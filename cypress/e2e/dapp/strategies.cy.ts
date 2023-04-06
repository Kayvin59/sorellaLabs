describe('Sorella Labs Dashboard', () => {
  beforeEach(() => {
    cy.visit('http://dapp.localhost:3000/strategies');
  });

  it('displays the Sorella Labs logo', () => {
    cy.get('[data-testid="sorella-labs-logo"]').should('be.visible');
  });

  it('connects the wallet when "Connect Wallet" button is clicked', () => {
    cy.get('button').contains('Connect Wallet').click();
    // TODO: test the wallet connection process
  });

  it('should go back to the home page when the logo is clicked', () => {
    cy.get('[data-testid="sorella-labs-logo"]').click();

    cy.origin('http://localhost:3000/', () => {
      cy.url().should('eq', 'http://localhost:3000/');
      cy.contains('Sorella Labs').should('be.visible');
      cy.contains('Optimised Liquidity, Coming Soon…').should('be.visible');
    });
  });

  it('should navigate to the "Strategies" page', () => {
    cy.contains('Strategies').click();

    cy.url().should('include', '/strategies');
  });

  describe('Tranche Cards', () => {
    it('displays three Tranche cards', () => {
      cy.get('[data-testid="tranche-card"]').should('have.length', 3);
    });

    it('clicking the "View" button on a Tranche card takes the user to the Tranche page', () => {
      cy.get('[data-testid="tranche-card"]').first().find('button').click();
      cy.url().should('contain', '/tranche');
    });
  });
});
