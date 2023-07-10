/// <reference types="Cypress" />

describe('verify the Intercept functionality', function () {

    it('verify the post request', function () {

        cy.intercept(
            // request
            {
                method: "POST",
                url: "https://jsonplaceholder.cypress.io/comments"
            }

        ).as('PostComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@PostComment').then(function ({ request, response }) {
            cy.log(response)
            expect(request.method).to.eq("POST");
            expect(response.statusCode).to.eq(201)
            expect(response.body).to.have.keys('body', 'email', 'id', 'name')
            cy.get('.network-post-comment').should('have.text', 'POST successful!')

        })

    })

    it.only('verify for the update button', function () {
        let message = 'whoa, this comment does not exist'
        cy.intercept(
            // request
            {
                method: 'PUT',
                url: '**/comments/*',
            },
            // response
            {
                statusCode: 404,
                body: { error: message },
                headers: { 'access-control-allow-origin': '*' },
                delayMs: 500,
            }).as('putComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@putComment').then(function (obj) {
            cy.log(obj)
            expect(obj.response.body.error).to.eq(message)
        })

    })
})




