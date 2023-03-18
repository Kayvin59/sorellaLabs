/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should contain the hero texts', () => {
    cy.contains('Sorella Labs').should('be.visible');
    cy.contains('Experience the Future of liquidity Provision').should('be.visible');
  });

  it('should navigate to the "Home" page', () => {
    cy.contains('Home').click();

    cy.url().should('include', '/');
  });

  it('should navigate to the "About" page', () => {
    cy.contains('About').click();

    cy.url().should('include', '/about');
  });

  it('should navigate to the "FAQ" page', () => {
    cy.contains('FAQ').click();

    cy.url().should('include', '/faq');
  });

  it('should navigate to the "Team" page', () => {
    cy.contains('Team').click();

    cy.url().should('include', '/team');
  });

  it('should launch the app when the "Launch App" button is clicked', () => {
    cy.get('button').contains('Launch App').click();

    // Assert that the app has launched
  });

  it('should display the copyright text', () => {
    cy.contains('© 2023 Sorella Labs™. All Rights Reserved.').should('be.visible');
  });

  it('should contain links to the Docs, Policy, and Contract pages', () => {
    cy.contains('Docs').should('have.attr', 'href', '/docs');

    cy.contains('Policy').should('have.attr', 'href', '/policy');

    cy.contains('Contract').should('have.attr', 'href', '/contract');
  });
});
