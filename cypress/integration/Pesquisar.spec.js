/// <reference types="cypress" />

describe('Navegação', () => {
    it('Navegar',() =>{
        cy.visit('https://www.apagina.com.br/');
        cy.get('.maeztraio-cookie-modal-0-x-cookieCloseButton').click();
        cy.get('.maeztraio-newsletter-cookies-0-x-cookieButton').click();
        cy.get('#downshift-1-input').type('Hello Kitty').type('{enter}');
        cy.wait(5000);
    });
});