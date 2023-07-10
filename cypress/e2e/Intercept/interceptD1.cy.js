///<reference types='cypress'/>


describe('verify the functionality using intercept', () => {
    it('verify the get comment functionality', function () {
        // get a response
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.get('.network-comment').should('be.visible')
        cy.get('.network-comment').should('contain', 'laudantium ')


    })


    it('verify the get comment functionality', function () {
        // get a response on UI and check API
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('be.visible')
        cy.get('.network-comment').should('contain', 'laudantium ')


    })


    it('verify the get comment functionality', function () {
        // Check UI+API response
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('GetComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@GetComment').then(function ({ request, response }) {
            expect(response.statusCode).to.eq(200)
            cy.log(response.body.body)
            cy.get('.network-comment').should('have.text', response.body.body)
        })
    })

    it.only('verify the get api and ui response', function () {
        cy.intercept(
            {
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1",
        },
            {
                body:
                {
                    postId: 1,
                    id: 1,
                    name: "id labore ex et quam laborum",
                    email: "Eliseo@gardner.biz",
                    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"

                }
            
            // body:
            // {
            //     postId: 1,
            //     id: 1,
            //     name: "id labore ex et quam laborum",
            //     email: "Eliseo@gardner.biz",
            //     body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"

            // }

        }).as('GetComment')
    cy.visit('https://example.cypress.io/commands/network-requests')
    cy.contains('Get Comment').click()
    cy.wait('@GetComment').then(function ({ request, response }) {
        expect(response.statusCode).to.eq(200)
        cy.log(response.body.body)
        cy.get('.network-comment').should('have.text', response.body.body)
    })
})
})