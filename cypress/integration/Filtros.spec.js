/// <reference types="cypress" />

describe('Carrinho', () => {
    it('Adicionar e remover',() =>{
        cy.visit('https://www.apagina.com.br/');
        cy.get('.maeztraio-cookie-modal-0-x-cookieCloseButton').click();
        cy.get('.maeztraio-newsletter-cookies-0-x-cookieButton').click();
        cy.get('#downshift-1-input').type('Helloy Kitty').type('{enter}');
        cy.wait(6500);
        cy.get('.apagina-search-result-0-x-filterPopupButton > .apagina-search-result-0-x-filterPopupTitle').click();
        cy.get('.apagina-search-result-0-x-accordionFilterContainer--departamento > .apagina-search-result-0-x-accordionFilterItem > .apagina-search-result-0-x-accordionFilterContent').click();
        cy.wait(500);
        cy.get('[style="height: auto;"] > .ReactCollapse--content > .pl8 > .apagina-search-result-0-x-accordionFilterOpen > .apagina-search-result-0-x-filterAccordionItemBox > .vtex-checkbox__line-container > .vtex-checkbox__label').click();
        cy.get('.apagina-search-result-0-x-filterApplyButtonWrapper > .vtex-button > .vtex-button__label').click();
        cy.wait(5000);
        cy.get('.apagina-search-result-0-x-filterPopupButton > .apagina-search-result-0-x-filterPopupTitle').click();
        cy.wait(500);
        cy.get('#Livros').click();
        cy.wait(500);
        cy.get('.apagina-search-result-0-x-accordionFilterContainer--autor > .apagina-search-result-0-x-accordionFilterItem > .apagina-search-result-0-x-accordionFilterContent').click();
        cy.wait(500);
        cy.get('.apagina-search-result-0-x-filterAccordionItemBox--cultural-ciranda > .vtex-checkbox__line-container').click();
        cy.wait(500);
        cy.get('.apagina-search-result-0-x-filterApplyButtonWrapper > .vtex-button > .vtex-button__label').click();
    });
});