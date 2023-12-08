/// <reference types="cypress" />

describe('Menu', () => {
    it('Navegar pelo menu',() =>{
        cy.visit('https://www.apagina.com.br/');
        cy.get('.maeztraio-cookie-modal-0-x-cookieCloseButton').click();
        cy.get('.maeztraio-newsletter-cookies-0-x-cookieButton').click();
        cy.get('.vtex-disclosure-layout-1-x-trigger').click();
        cy.get('.apagina-convenios-1-x-input__searchBarHome').type('Universidade Tecnologica');
        cy.get('.vtex-disclosure-layout-1-x-trigger').click();
        cy.get('.vtex-flex-layout-0-x-flexRow--slider-image-fac-0001--1 > .mt0 > .items-stretch > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderRightArrow > .vtex-slider-layout-0-x-caretIcon').click();
        cy.get('.vtex-flex-layout-0-x-flexRow--shelf-fac-0001--home > .vtex-flex-layout-0-x-flexRowContent--shelf-fac-0001--container > :nth-child(1) > .vtex-flex-layout-0-x-flexCol--shelf-fac-0001 > :nth-child(2) > .vtex-flex-layout-0-x-flexRow--shelf-fac-0001--shelf > .vtex-flex-layout-0-x-flexRowContent--shelf-fac-0001--shelf > :nth-child(1) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderTrackContainer > [data-testid=slider-track] > [aria-label="1 of 20"] > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-flex-layout-0-x-flexRow--summary-fac-0001--img-container > .vtex-flex-layout-0-x-flexRowContent--summary-fac-0001--img-container > .flex-grow-1 > .vtex-flex-layout-0-x-flexCol > :nth-child(1) > .vtex-flex-layout-0-x-flexRow--summary-fac-0001--badges > .justify-between > :nth-child(2) > .vtex-flex-layout-0-x-flexRow > .mt0 > .pr0 > .vtex-wish-list-1-x-wishlistIconContainer > .vtex-button > .vtex-button__label > .vtex-wish-list-1-x-wishlistIcon').click();
        cy.get('.vtex-store-icons-0-x-cartIcon').click();
        cy.get('.vtex-minicart-2-x-closeIcon').click();
    });
});