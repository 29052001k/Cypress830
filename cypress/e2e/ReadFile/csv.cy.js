///<reference types='cypress'/>
describe('csv Data Write', () => {
    it.skip('write csv data', () => {
        let firstName = "Kalyani,"
        let lastName = 'Hadole'
        cy.writeFile('cypress/e2e/readFile/testData.csv', firstName + lastName)
    });
    it('Export data in csv format', () => {
        cy.writeFile('cypress/e2e/readFile/Flipkart.csv', "")
        let count = 0
        cy.visit('https://www.flipkart.com/search?q=i%20phone&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')
        cy.get('[class="_3pLy-c row"]').each((el) => {
            let price = el.find('[class="_30jeq3 _1_WHN1"]').text().replace(',', "").replace('₹', "")
            if (Number(price) > 70000) {
                let title = el.find('._4rR01T').text().replace(',', "")
                cy.writeFile('cypress/e2e/readFile/Flipkart.csv', `${title},${price}\n`, { flag: "a+" })
            }
        })
    })
});