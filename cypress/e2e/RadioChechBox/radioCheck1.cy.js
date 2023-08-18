///<reference types="cypress"/>



describe('verify the radio and check box', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })
    it('check radio buttons', () => {
        cy.get('[value="green"]').check().should('be.checked')
        cy.get('[value="blue"]').check().should('be.checked')
        cy.get('[value="green"]').should('not.be.checked')
    })
    it('check radio buttons at one time', () => {
        cy.get('[type="radio"]').each((el, index) => {
            cy.wrap(el).check({ force: true }).should('be.checked')
        })
    })
    
    it('check the checkbox', () => {
        cy.get('[value="option-3"]').uncheck().should('not.be.checked')
        cy.get('[value="option-1"]').check().should('be.checked')
        cy.get('[value="option-2"]').check().should('be.checked')
        cy.get('[value="option-4"]').check().should('be.checked')
        cy.get('[value="option-2"]').uncheck().should('not.be.checked')
    })
    it.only('check at once time',()=>{
        cy.get('[type="checkbox"]').each(el=>{
            cy.wrap(el).check().should('be.checked')
        })
    })
})