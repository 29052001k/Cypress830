///<reference types="cypress"/>


describe('varify the calender', () => {
    it('validate the datepicker', () => {
        let date = new Date()
        date.setDate(date.getDate() + 300)
        let d1 = date.getDate()
        let m1 = date.toLocaleString('default',{month:'long'})
        let y1 = date.getFullYear()
        cy.log(d1, m1, y1)


        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        function getYearMonth() {
            cy.get('.datepicker-switch').first().then(el => {
                cy.log(el.text())
                if (!el.text().includes(y1)) {
                    cy.get('.next').first().click()
                    getYearMonth()
                }
            })

            cy.get('.datepicker-switch').first().then(el => {
                cy.log(el.text())
                if (!el.text().includes(m1)) {
                    cy.get('.next').first().click()
                    getYearMonth()
                }
            })

        }

        getYearMonth()


        function GetDate() {
            cy.contains(d1).click()
        }
        GetDate()
    })
})