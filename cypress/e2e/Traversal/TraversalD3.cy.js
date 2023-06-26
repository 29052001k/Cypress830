///<reference types="cypress"/>

describe('verify the traversal method', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    })
    it('To get all sibling DOM elements of elements, use the .siblings() command.', function () {
        cy.get('.disabled').siblings().should('have.length', 3)
        // cy.get('.disabled').siblings().each(function (el) {   // print the every element text
        //     cy.log(el.text())
        // })
    })
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.', function () {
        cy.get('#veggie').prevAll().as('aboveElement')
        cy.get('@aboveElement').should('have.length', 6)


    })

    it('To get all next sibling DOM elements within elements, use the .next() command.', function () {
        cy.get('#veggie').nextAll().should('have.length', 4)
    })

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', function () {
        cy.get('#fruits').nextUntil('#veggie').should('have.length', 5)

    })

    it('To get all of the nprevious sibling DOM elements within elements until another element, use the .prevUntil() command.', function () {
        cy.get('#veggie').prevUntil('#fruits').should('have.length', 5)

    })

})