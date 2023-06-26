///<reference types="cypress"/>

describe('multiple data', () => {
    let obj = [{
        name: 'Kalyani',
        LastName: 'Hadole',
        email: 'kalyanihadole12@gmail.com',
        msg: 'I am learning Cypress',
        successMsg: 'Thank You for your Message!'
    },
    {
        name: 'Kalyani',
        LastName: 'Hadole',
        email: 'kalyanihadole12@gmail',
        msg: 'I am learning Cypress',
        successMsg: 'Error: Invalid email address '
    }]

    it('using forEach', () => {

        obj.forEach(el => {
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.name)
            cy.get('input[name="last_name"]').type(el.LastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.msg)
            cy.get('input[type="submit"]').click()
            cy.wait(4000)
            cy.get('h1').should('have.text', el.successMsg)
            // cy.get('body').should('have.text', el.successMsg)

        })
    })
})