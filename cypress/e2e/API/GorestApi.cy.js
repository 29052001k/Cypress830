/// <reference types="cypress"/>
describe('gorest api', () => {
    let token = "Bearer 6a41034526564a2ad62123e5a33fe1414d39b05fae987eff99ae76c13fb890fb"
    let id = ""
    it('Post api', () => {
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
                Authorization: token

            }
        }).then(response => {
            expect(response.status).to.eql(201)
            id = response.body.id
        })
    })


    it('Put api', () => {
        cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/" + id,
            body: {
                "name": "Kalayni Hadole",
                "email": `kalyanihadole@${Math.random() * 4}ce.com`,
                "status": "active"
            },
            headers: {
                Authorization: token
            }
        }).then(response => {
            expect(response.status).to.eql(200)
            response.body.id
        })
    })

    it('Delete api', () => {
        cy.request({
            method: "DELETE",
            url: "https://gorest.co.in/public/v2/users/" + id,
            headers: {
                Authorization: token
            }
        }).then(response => {
            expect(response.status).to.eql(204)

        })
    })


})