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

    // it("has anchor tags", () => {
    //     cy.get('a')
    //     .invoke('a', 'href')
    //     .should('eq', 'https://appcoderz.com/')
    // });

})

describe('Page Title and Links in Home Page', () => {
    beforeEach(() => {
        cy.visit('https://appcoderz.com')
    })

    it('Verify Page Title', () => {
        cy.title().should('include', 'App Coderz - We Provide A Splendid One - Stop Solution')
    })

    //   it('check all links of Home page', () => {
    //     cy.get('a').each(page => {
    //       cy.request(page.prop('href'))
    //     })
    //   });
})

// describe('Home Page Sliders Test Suite', () => {
//     before(() => {
//         cy.visit('https://appcoderz.com')
//     })
    

// })   

