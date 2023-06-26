/// <reference types="Cypress" />
describe('API Testing', () => {

    it('GET API', () => {
        cy.request({
            url: "https://reqres.in/api/users?page=2",
            method: "GET"
        })
            .then((response) => {
                cy.log(response)
                expect(response.status).to.eq(200)
            })

    })

    it('POST API', () => {
        cy.request({
            url: "https://reqres.in/api/users",
            method: "POST",
            body: {
                name: "kalyani",
                job: "qa tester"
            }
        }).then((response) => {
            cy.log(response)
            expect(response.status).to.eq(201)
        })
    })

    it('PUT API', () => {
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: "PUT",
            body: {
                name: "nilesh",
                job: "software tester"
            }
        }).then((response) => {
            cy.log(response)
            expect(response.status).to.eq(200)
        })

    })

    it('DELETE API', () => {
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: "DELETE",

        }).then((response) => {
            cy.log(response)
            expect(response.status).to.eq(204)
        })

    })
})