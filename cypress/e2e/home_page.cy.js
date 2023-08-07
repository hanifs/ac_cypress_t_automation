///<reference types="cypress" />

describe('Home Page Header Navigation Menu Test Suite', () => {
    beforeEach(() => {
        cy.visit('https://appcoderz.com')
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

    it('Verify all header nav menu elements', () => {
        cy.get('.clearfix > li').each(($ele) => {
            cy.log($ele.text()) //prints the header list  
          })
            .should('have.length', 16 )
    })

    it(" Anchor tags should not have udefined value", () => {
        cy.contains("a", "#").should("not.have.attr", "href", "#undefined");
    })

    it("Verify Home button text and clicking redirects to home page", () => {
        cy.get('div')
        .should('have.class', 'mkdf-position-center-inner')
        .contains('Home').click()
        cy.url().should('eq', 'https://appcoderz.com/')
    })

    it("Verify Our Services button text and clicking redirects services page", () => {
        cy.get('#nav-menu-item-13714')
        .contains('Our Services').click()
        cy.url().should('eq', 'https://appcoderz.com/our-services-2/')
    })

    it('Our Services button should have five links', () => {
        cy.get('#nav-menu-item-13714 li')
        .each(($li) => cy.log($li.text()))
        .should('have.length', 5 )
    })

    it("Verify Blog button text and clicking redirects blog page", () => {
        cy.get('#nav-menu-item-16821')
        .contains('Blog').click()
        cy.url().should('eq', 'https://appcoderz.com/blogs/')
    })

    it("Verify Pricing button text and clicking redirects Pricing page", () => {
        cy.get('#nav-menu-item-17035')
        .contains('Pricing').click()
        cy.url().should('eq', 'https://appcoderz.com/digital-marketing-packages/')
    })

    it('Our Pricing button should have three links', () => {
        cy.get('#nav-menu-item-17035 li')
        .each(($li) => cy.log($li.text()))
        .should('have.length', 3 )
    })

    it("Verify About US button text and clicking redirects About US page", () => {
        cy.get('#nav-menu-item-13712')
        .contains('About us').click()
        cy.url().should('eq', 'https://appcoderz.com/about-app-coderz/')
    })

    it("Verify Contact us button text and clicking redirects Contact us page", () => {
        cy.get('#nav-menu-item-13745')
        .contains('Contact Us').click()
        cy.url().should('eq', 'https://appcoderz.com/contact-app-coderz/')
    })

    it("Verify phone number", () => {
        cy.get('#nav-menu-item-15679')
        .contains('+1 (214) 662 2416').should('be.visible')
    })

    it("Verify Get Free Analysis button text and clicking redirects  Analysis page", () => {
        cy.get('#nav-menu-item-18399')
        .contains('Contact Us').click()
        cy.url().should('eq', 'https://appcoderz.com/get-free-analysis/')
    })
})
describe('Page Title and Links in Home Page', () => {
    beforeEach(() => {
        cy.visit('https://appcoderz.com')
    })

    it('Verify Page Title', () => {
        cy.title().should('include', 'App Coderz - We Provide A Splendid One - Stop Solution')
    })

    it('check all links of Home page', () => {
        cy.get('a').each(page => {
        cy.request(page.prop('href'))
        })
    })
})