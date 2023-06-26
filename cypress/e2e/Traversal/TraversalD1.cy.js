
/// <reference types="Cypress" />

describe('traversal method in cypress', () => {

    it('To get children of DOM elements, use the .children() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().should('have.length', 11)
    })

    it('To get the next sibling DOM element within elements, use the .next() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').next().should('have.text', "Apple")

    })
    it.only('To get the previous sibling DOM element within elements, use the .prev() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prev().should('have.text', 'Figs')

    })
})