/// <reference types="cypress"/>

describe('Travesal method',()=>{
    it('To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text','Warning')
    })

    it('To remove DOM element(s) from the set of elements, use the .not() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)
    })

    it('To get parent DOM element of elements, use the .parent() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.btn-outline-danger').parent().should('have.class','traversal-button-states')
    })

    it('To get parents DOM element of elements until other element, use the .parentsUntil() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').parentsUntil('.col-sm-12').should('have.length',2)

    })

    it('To get the closest ancestor DOM element, use the .closest() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').closest('div').should('have.class','thumbnail')

    })


})