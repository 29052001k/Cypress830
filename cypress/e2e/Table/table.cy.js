/// <reference types="Cypress" />


describe('verify the table in cypress', () => {
    it('verify the sum of value for table one', () => {
        let sum = 0
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('tbody').children().each( (row, index) =>{
            if (index != 0) {
                //cy.log(row.text())
                sum = sum + Number(row.children().last().text())
            }
        }).then( ()=> {
            expect(sum).to.eq(159)
        })
    })

    it.only('verify the sum of value for table two', () => {

        let sum = 0
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t02').find('tbody').children().each( (row, index)=> {
            if (index != 0) {
                //cy.log(row.text())
                sum = sum + Number(row.children().last().text())
            }
        }).then( () =>{
            expect(sum).to.eq(163)
        })

    })
})
