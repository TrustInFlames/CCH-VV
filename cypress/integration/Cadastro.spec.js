/// <reference types="cypress" />

describe('Carrinho', () => {
    it('Adicionar e remover',() =>{
        cy.visit('https://www.apagina.com.br/');
        cy.get('.maeztraio-cookie-modal-0-x-cookieCloseButton').click();
        cy.get('.maeztraio-newsletter-cookies-0-x-cookieButton').click();
        cy.get('#newsletter-input-name').type('Me deixa cadastrar');
        cy.wait(500);
        cy.get('#newsletter-input-email').type('Teste@gmail.com');
        cy.wait(500);
        cy.get('#newsletter-input-phone').type('99999999');
        cy.wait(500);
        cy.get('#newsletter-checkbox-confirmation').click();
        cy.wait(500);
        cy.get('#newsletter-input-name').type('Me deixa cadastrar');
        cy.get('.vtex-store-newsletter-1-x-formSubmitContainer > .vtex-button > .vtex-button__label').click();
    });
});