/// <reference types= "cypress"/>

import data from'../../fixtures/multipleUser.json'

describe('verify the functionality of ficture', () => {
    let obj = {
        firstName: "Kalyani",
        lastName: "Hadole",
        email: "kalynaihadole232@gmail.com",
        message: "I am learning cypress fixture"
    }

    before(function(){
        cy.fixture('singleUser').then(function(obj){
            this.obj=obj
        })
        cy.fixture('multipleUser').then(function(data){
            this.data=data
        })


    })
    it('type all information', () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type("kalyani")
        cy.get('input[name="last_name"]').type("hadole")
        cy.get('input[name="email"]').type("kalyanihadole29@gmail.com")
        cy.get('textarea[name="message"]').type("I am learning")
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it('using object', () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(obj.firstName)
        cy.get('input[name="last_name"]').type(obj.lastName)
        cy.get('input[name="email"]').type(obj.email)
        cy.get('textarea[name="message"]').type(obj.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it('access the fixture data from ficture folder', () => {
        cy.fixture('singleUser').then(function (obj) {
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(obj.firstName)
            cy.get('input[name="last_name"]').type(obj.lastName)
            cy.get('input[name="email"]').type(obj.email)
            cy.get('textarea[name="message"]').type(obj.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })

    it('access the fixture data from ficture folder-before', function() {
           cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(this.obj.firstName)
            cy.get('input[name="last_name"]').type(this.obj.lastName)
            cy.get('input[name="email"]').type(this.obj.email)
            cy.get('textarea[name="message"]').type(this.obj.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        
    })
    
    it('access the fixture data from fixture folder-forEach', function() {
        this.data.forEach(function(el){
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
 })

 data.forEach(function(el,index){
    it.only(`import multiple user ${index+1}`, function() {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(el.firstName)
        cy.get('input[name="last_name"]').type(el.lastName)
        cy.get('input[name="email"]').type(el.email)
        cy.get('textarea[name="message"]').type(el.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
     
    })
 })
 

})