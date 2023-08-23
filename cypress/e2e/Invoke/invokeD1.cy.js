///<reference types='cypress'/>
describe('invoke', () => {
    it.skip('invoke',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('[placeholder="Search Amazon.in"]').type('i phone{enter}')
        //add attribute and value
        cy.get('h2 a').invoke('attr','Ankit','test')
        //get value of attribute
        cy.get('h2 a').eq(0).invoke('attr','class').then((attrVal)=>{
            cy.log(attrVal)
        })
    })

    it.skip('invoke',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('[placeholder="Search Amazon.in"]').type('i phone{enter}')
        //to open result in same tab remove target='blank' attr and value
        cy.get('h2 a').eq(0)
        .invoke('removeAttr','target')
        .click()
        cy.get('#altImages').should('be.visible')
    })
});