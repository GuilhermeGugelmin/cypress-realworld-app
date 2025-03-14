
describe('Login', () => {
   
    it('Login Success', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get("[name='username']").type('rimo1357')
        cy.get("[name='password']").type('13572468')
        cy.get("[type='submit']").click()
        cy.get("[data-test='nav-public-tab']")
    })

    it('Login Fail - User Fail', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get("[name='username']").type('test')
        cy.get("[name='password']").type('13572468')
        cy.get("[type='submit']").click()
        cy.get("[data-test='signin-error']")
    })

    it('Login Fail - Password Fail', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get("[name='username']").type('rimo1357')
        cy.get("[name='password']").type('test')
        cy.get("[type='submit']").click()
        cy.get("[data-test='signin-error']")
    })
  
})




























