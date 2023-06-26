///<reference types="cypress"/>

describe('verify the Basic Auth API', () => {
    it('verify the all request in chain', () => {

        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                "name": "Aryan Pawar",
                "email": `aryanpawar@${Math.random() * 4}ce.com`,
                "gender": "male",
                "status": "active"
            },
            headers: {
                Authorization: "Bearer 6a41034526564a2ad62123e5a33fe1414d39b05fae987eff99ae76c13fb890fb"
            }
        }).then(response => {
            // cy.log(response)
            return response.body.id
        }).then(id => {
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                body: {
                    "name": "Kalayni Hadole",
                    "email": `kalyanihadole@${Math.random() * 4}ce.com`,
                    "status": "active"
                },
                headers: {
                    Authorization: "Bearer 6a41034526564a2ad62123e5a33fe1414d39b05fae987eff99ae76c13fb890fb"
                }
            }).then(response => {
                return response.body.id
            }).then(id => {
                cy.request({
                    method: "DELETE",
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        Authorization: "Bearer 6a41034526564a2ad62123e5a33fe1414d39b05fae987eff99ae76c13fb890fb"
                    }
                }).then(response => {
                    cy.log(response)
                    expect(response.status).to.eq(204)
                })         
            })
        })
    })
})