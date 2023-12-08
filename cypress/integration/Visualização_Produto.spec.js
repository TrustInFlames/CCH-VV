/// <reference types="cypress" />

describe('Navegação', () => {
    it('Navegar',() =>{
        cy.visit('https://www.apagina.com.br/');
        cy.get('.maeztraio-cookie-modal-0-x-cookieCloseButton').click();
        cy.get('.maeztraio-newsletter-cookies-0-x-cookieButton').click();
        cy.get('#downshift-1-input').type('Hello Kitty').type('{enter}');
        cy.wait(5000);
        cy.get(':nth-child(2) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-flex-layout-0-x-flexRow--summary-fac-0001--img-container > .vtex-flex-layout-0-x-flexRowContent--summary-fac-0001--img-container > .flex-grow-1 > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-product-summary-2-x-imageWrapper > .dib > .vtex-product-summary-2-x-imageNormal').click();
        cy.wait(5000);
    });
});