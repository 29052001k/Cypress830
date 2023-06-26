///<reference types="cypress"/>

describe('verify the contact us form',()=>{
    beforeEach(()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })
    it('verify the valide data with submit button',()=>{
        cy.get('input[name="first_name"]').type("Kalyani")
        cy.get('input[name="last_name"]').type("Hadole")
        cy.get('input[name="email"]').type("kalyanihadole12@gmail.com")
        cy.get('textarea[name="message"]').type("I am learning Cypress")
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })

    it('verify the functionality of reset button',()=>{
        cy.get('input[name="first_name"]').type("Kalyani")
        cy.get('input[name="last_name"]').type("Hadole")
        cy.get('input[name="email"]').type("kalyanihadole12@gmail.com")
        cy.get('textarea[name="message"]').type("I am learning Cypress")
        cy.get('input[type="reset"]').click()
        cy.get('input[name="first_name"]').should('have.text','')
        cy.get('input[name="last_name"]').should('have.text','')
        cy.get('input[name="email"]').should('have.text',"")
        cy.get('textarea[name="message"]').should('have.text','')
      
    })

    it('verify the functionality with invalid email',()=>{
        cy.get('input[name="first_name"]').type("Kalyani")
        cy.get('input[name="last_name"]').type("Hadole")
        cy.get('input[name="email"]').type("kalyanihadole12@gmail")
        cy.get('textarea[name="message"]').type("I am learning Cypress")
        cy.get('input[type="submit"]').click()
        cy.get('body').should('contain',"Error: Invalid email address")
    })

    it('verify the title of page',()=>{
        cy.title().should('eq','WebDriver | Contact Us')
    })
})