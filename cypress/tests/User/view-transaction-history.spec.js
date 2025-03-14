
describe('View Transaction History', () => {
   

    it('Successfully View Transaction History', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get("[name='username']").type('rimo1357')
        cy.get("[name='password']").type('13572468')
        cy.get("[type='submit']").click()





    })






    

    it('Trying To View Transaction History For A User With No Previous Transactions', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get("[name='username']").type('ney-user-not-history')
        cy.get("[name='password']").type('13572468')
        cy.get("[type='submit']").click()








    })













})