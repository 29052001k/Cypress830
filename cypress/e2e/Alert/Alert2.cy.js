///<reference types='cypress'/>
describe('js alerts', () => {

    it.skip('window alert', () => {
        cy.on('window:alert', (message) => {
            expect(message).to.eql('I am a JS Alert')
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsAlert()"]').click()
    })

    it.skip('confirm alert click on cancel button', () => {
        cy.on('window:confirm', (message) => {
            expect(message).to.eql('I am a JS Confirm')
            return false
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
    })

    it.skip('confirm alert click on cancel button', () => {
        cy.on('window:confirm', (message) => {
            expect(message).to.eql('I am a JS Confirm')
            return true
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
    })

    it('confirm alert click on cancel button', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((window) => {
            cy.stub(window, 'prompt').returns('I clicked on Prompt button 4564654564 4545645646547654')
            cy.get('[onclick="jsPrompt()"]').click()
        })
    })
});