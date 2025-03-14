

describe('View Transaction History', () => {
   

    it('Successfully View Transaction History', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get("[name='username']").type('rimo1357')
        cy.get("[name='password']").type('13572468')
        cy.get("[type='submit']").click()
        cy.get("[data-test='nav-personal-tab']").click()
        cy.get(".TransactionItem-socialStats")
    })


    it('Trying To View Transaction History For A User With No Previous Transactions', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get("[name='username']").type('new-user-not-history')
        cy.get("[name='password']").type('13572468')
        cy.get("[type='submit']").click()
        cy.get("[data-test='nav-personal-tab']").click()
        cy.get("[data-test='empty-list-header']")
    })


})