/// <reference types="Cypress" />

describe('hooks in cypress',  ()=> {

    before( ()=> {
        cy.log('I will run first')
    })
    beforeEach( ()=> {
        cy.log(' I will before each testcase')
    })

    afterEach( ()=> {
        cy.log('I will run after each testcase')
    })

    it('Testcase one',  ()=> {
        cy.log('Testcase one')
    })
    it('Testcase two',  ()=> {
        cy.log('Testcase two')
    })

    after( ()=> {
        cy.log('I will the last test case')
    })
})