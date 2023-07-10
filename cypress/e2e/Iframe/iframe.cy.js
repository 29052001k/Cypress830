describe('verify the iframe in js',()=>{

    it('verify functionality for iframe using javascript',()=>{
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        //cy.contains('HOME')
        cy.get('#frame').then((iframe1)=>{
            let bdy = iframe1[0].contentDocument.body
            cy.wrap(bdy).as('body')
            cy.get('@body').find('a[href = "index.html"]').should('have.text',"Home")

        })
    })

    it('verify functionality for iframe using jquery',()=>{
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        //cy.contains('HOME')
        cy.get('#frame').then((iframe2)=>{
            let bdy = iframe2.contents().find('body')
            cy.wrap(bdy).as('body')
            cy.get('@body').find('a[href = "index.html"]').should('have.text',"Home")
        })
    })
})

