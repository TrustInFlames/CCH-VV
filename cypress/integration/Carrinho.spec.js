/// <reference types="cypress" />

describe('Carrinho', () => {
    it('Adicionar e remover',() =>{
        cy.visit('https://www.apagina.com.br/');
        cy.get('.maeztraio-cookie-modal-0-x-cookieCloseButton').click();
        cy.get('.maeztraio-newsletter-cookies-0-x-cookieButton').click();
        cy.get('.vtex-flex-layout-0-x-flexRow--shelf-fac-0001--home > .vtex-flex-layout-0-x-flexRowContent--shelf-fac-0001--container > :nth-child(1) > .vtex-flex-layout-0-x-flexCol--shelf-fac-0001 > :nth-child(2) > .vtex-flex-layout-0-x-flexRow--shelf-fac-0001--shelf > .vtex-flex-layout-0-x-flexRowContent--shelf-fac-0001--shelf > [style="width:100%"] > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderTrackContainer > [data-testid=slider-track] > [aria-label="1 of 20"] > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-flex-layout-0-x-flexRow--summary-fac-0001--info-container > .vtex-flex-layout-0-x-flexRowContent--summary-fac-0001--info-container > :nth-child(1) > .vtex-flex-layout-0-x-flexCol--summary-fac-0001--info-container > :nth-child(2) > .vtex-flex-layout-0-x-flexCol--summary-price-fac-0001--container > :nth-child(3) > .vtex-flex-layout-0-x-flexRow > .mt0 > .pr0 > .vtex-button > .vtex-button__label > .vtex-add-to-cart-button-0-x-buttonDataContainer > .vtex-add-to-cart-button-0-x-buttonText').click();
        cy.get('.vtex-store-drawer-0-x-closeIconButton').click();
        cy.get('.vtex-flex-layout-0-x-flexRow--shelf-fac-0001--home > .vtex-flex-layout-0-x-flexRowContent--shelf-fac-0001--container > :nth-child(1) > .vtex-flex-layout-0-x-flexCol--shelf-fac-0001 > :nth-child(2) > .vtex-flex-layout-0-x-flexRow--shelf-fac-0001--shelf > .vtex-flex-layout-0-x-flexRowContent--shelf-fac-0001--shelf > [style="width:100%"] > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderTrackContainer > [data-testid=slider-track] > [aria-label="2 of 20"] > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-flex-layout-0-x-flexRow--summary-fac-0001--info-container > .vtex-flex-layout-0-x-flexRowContent--summary-fac-0001--info-container > :nth-child(1) > .vtex-flex-layout-0-x-flexCol--summary-fac-0001--info-container > :nth-child(2) > .vtex-flex-layout-0-x-flexCol--summary-price-fac-0001--container > :nth-child(3) > .vtex-flex-layout-0-x-flexRow > .mt0 > .pr0 > .vtex-button > .vtex-button__label').click();
        cy.get('#proceed-to-checkout > .vtex-button__label').click();
        cy.get('#item-remove-2447').click();
        cy.get('#item-remove-22312 > .icon').click();
    });
});