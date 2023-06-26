/// <reference types="Cypress" />


describe('Js alert', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('normal js alert', () => {
        cy.on('window:alert', (str) => {
            expect(str).to.eq('I am a JS Alert')
            return true
        })
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('have.text', "You successfully clicked an alert")
    })
    it('js confirm alert  with ok', () => {
        cy.on('window:confirm', (str) => {
            expect(str).to.eq('I am a JS Confirm')
            return true
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text', "You clicked: Ok")

    })
    it('js confirm alert with cancel', () => {
        cy.on('window:confirm', (str) => {
            expect(str).to.eq('I am a JS Confirm')
            return false
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text', "You clicked: Cancel")

    })
    it('js prompt with ok', () => {

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('I am learning js')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text', "You entered: I am learning js")

    })


})