///<reference types="cypress"/>


describe('verfify the api',  ()=> {

    it('verify the get request',  () =>{
        cy.request('GET', "https://reqres.in/api/users?page=2")
            .then( (response)=> {
                //cy.log(response)
                expect(response.status).to.eq(200)
                expect(response.body.page).to.eq(2)
                expect(response.body.per_page).to.eq(6)
            })
    })


    it('verify the GET request',  () =>{
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users",
            qs: { page: 2 }
        })
            .then( (response) =>{
                expect(response.status).to.eq(200)
                expect(response.body.page).to.eq(2)
                expect(response.body.per_page).to.eq(response.body.data.length)
                expect(response.body.data[0]).to.have.property('id', 7)
                response.body.data.forEach(el => {
                    expect(el).to.have.property('first_name')
                    expect(el).to.have.property('last_name')
                    expect(el).to.have.property('id')
                    expect(el).to.have.property('email')
                    expect(el).to.have.property('avatar')
                });
            })
    })

    it('verify the post request',  ()=> {

        let payload = {
            name: "Kalyani",
            job: "tester"
        }
        cy.request({
            url: "https://reqres.in/api/users",
            method: "POST",
            body: payload
        }).then( (response)=> {
            cy.log(response)
            expect(response.status).to.eq(201)
            expect(response.body).to.have.keys(["name", 'job', 'id', 'createdAt'])
            expect(response.body.name).to.eq(payload.name)
            expect(response.body.job).to.eq(payload.job)

        })

    })
    it('verify the update request',  () =>{
        let payload = {
            name: "Pradnya",
            job: "software tester"
        }
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: "PUT",
            body: payload
        }).then( (response) =>{
            cy.log(response)
            expect(response.status).to.eq(200)
            //expect(response.body).to.have.keys(["name", 'job', 'id', 'createdAt'])
            expect(response.body.name).to.eq(payload.name)
            expect(response.body.job).to.eq(payload.job)

        })
    })

    it.only('verify the Delete request',  () =>{
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: "DELETE",
        }).then( (response) =>{
            expect(response.status).to.eq(204)
        })
    })
})
