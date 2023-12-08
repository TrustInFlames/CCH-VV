/// <reference types="cypress" />

describe('Menu', () => {
    it('Navegar pelo menu',() =>{
        cy.visit('https://www.apagina.com.br/');
        cy.get('.maeztraio-cookie-modal-0-x-cookieCloseButton').click();
        cy.get('.maeztraio-newsletter-cookies-0-x-cookieButton').click();
        cy.get('.apagina-header-menu-0-x-sideNavigationMenu__openButton').click();
        cy.get(':nth-child(1) > .vtex-rich-text-0-x-link').click();
        cy.wait(5000);
        cy.get('.apagina-header-menu-0-x-icon').click();
        cy.get(':nth-child(2) > .vtex-rich-text-0-x-link').click();
        cy.get('.apagina-header-menu-0-x-icon').click();
        cy.get('#fc286d59-700e-4138-89f5-c6bfdee51f76 > .apagina-header-menu-0-x-mzMenuContent__link').click();
    });
});