///<reference types='cypress'/>
describe('Mouse Actions', () => {
    /*1 for the left mouse button
2 for the middle mouse button
3 for the right mouse button*/
    it.skip('double click ', () => {
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#double-click').dblclick().should('have.css','background-color','rgb(147, 203, 90)')
    });
    it.skip('mouse over ', () => {
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#click-box').trigger('mousedown',{which:1}).should('contain','Well')
    });
    it.skip('drag and drop', () => {
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable').should('contain','Dropped!')
    });

    it('mouse over using real event plugin', () => {
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('.dropbtn').first().realHover()
    });
});