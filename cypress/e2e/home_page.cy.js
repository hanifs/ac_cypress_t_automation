///<reference types="cypress" />

describe('Home Page Test Cases', () => {
    beforeEach(() => {
        cy.visit('https://appcoderz.com')
    })

    it('Verify Page Title', () => {
        cy.title().should('include', 'App Coderz - We Provide A Splendid One - Stop Solution')
    })

    it('Verify header section is present in home page', () => {
        cy.get('.mkdf-position-center')
            .should('be.visible')
            .find('li')
            
    })

    it('Verify Logo is visible and clickable in the header', () => {
        cy.get('.cky-banner-btn-close > img')
            .should('be.visible')
            .click()
    })

    it('Verify Home button is visible and clickable in the header', () => {
        cy.get('#nav-menu-item-13722 > a > .item_outer > .item_text')
            .should('be.visible')
            .and('contain', 'Home')
            .click()
    })
    
    
})


