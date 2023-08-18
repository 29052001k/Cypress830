///<reference types="cypress"/>

describe('read the file',()=>{
    it.only('read File',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.readFile('cypress/fileData/file.json').then((file)=>{
            cy.get('.Pke_EE').type(file.searchData)
        })
    })

    it('write file',()=>{
        cy.writeFile('cypress/fileData/exportedData.txt',"")
        cy.visit('https://www.flipkart.com/')
        cy.get('[type="text"]').type('I phone 14')
        cy.get('[action="/search"] ul li').each((el)=>{
        cy.writeFile('cypress/fileData/exportedData.txt',el.text()+'\n',{ flag: 'a+' })
        })
    })

    it('parse special character sequence',()=>{
        cy.writeFile('cypress/fileData/exportedData.txt',"")
        cy.visit('https://www.flipkart.com/')
        cy.get('[type="text"]').type('{I phone 14}',{parseSpecialCharSequences: false})

    })
})