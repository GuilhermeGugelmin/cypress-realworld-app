
describe('User Registration', () => {

  it('User Registration Success', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[href='/signup']").click()
    cy.get("[name='firstName']").type('Ricardo')
    cy.get("[name='lastName']").type('Molina')
    cy.get("[name='username']").type('rimo1357')
    cy.get("[name='password']").type('13572468')
    cy.get("[name='confirmPassword']").type('13572468')
    cy.get("[data-test='signup-submit']").click()
    cy.get("[name='username']").type('rimo1357')
    cy.get("[name='password']").type('13572468')
    cy.get("[type='submit']").click()
    cy.get("[data-test='user-onboarding-dialog-content']")
    cy.get("[data-test='user-onboarding-next']").click()
    cy.get("[name='bankName']").type('Banco do Brasil')
    cy.get("[name='routingNumber']").type(123456789)
    cy.get("[name='accountNumber']").type(987654321)
    cy.get("[data-test='bankaccount-submit']").click()
    cy.get("[data-test='user-onboarding-dialog-content']")
    cy.get("[data-test='user-onboarding-next']").click()
  })

  it('User Registration Fail - Incomplete Information - Fist Name', () => {
      cy.visit('http://localhost:3000/signin')
      cy.get("[href='/signup']").click()
      cy.get("[name='firstName']").click() 
      cy.get("[name='lastName']").type('Molina')
      cy.get("[name='username']").type('rimo1357')
      cy.get("[name='password']").type('13572468')
      cy.get("[name='confirmPassword']").type('13572468')
      cy.get("[data-test='signup-first-name']") 
  })

  it('User Registration Fail - Incomplete Information - Last Name', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[href='/signup']").click()
    cy.get("[name='firstName']").type('Ricardo')
    cy.get("[name='lastName']").click()
    cy.get("[name='username']").type('rimo1357')
    cy.get("[name='password']").type('13572468')
    cy.get("[name='confirmPassword']").type('13572468')
    cy.get("[data-test='signup-last-name']") 
  })

  it('User Registration Fail - Incomplete Information - Username', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[href='/signup']").click()
    cy.get("[name='firstName']").type('Ricardo')
    cy.get("[name='lastName']").type('Molina')
    cy.get("[name='username']").click()
    cy.get("[name='password']").type('13572468')
    cy.get("[name='confirmPassword']").type('13572468')
    cy.get("[data-test='signup-last-name']") 
  })

  it('User Registration Fail - Incomplete Information - Password', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[href='/signup']").click()
    cy.get("[name='firstName']").type('Ricardo')
    cy.get("[name='lastName']").type('Molina')
    cy.get("[name='username']").type('rimo1357')
    cy.get("[name='password']").click()
    cy.get("[name='confirmPassword']").type('13572468')
    cy.get("[data-test='signup-password']") 
  })

  it('User Registration Fail - Incomplete Information - Confirm Password', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[href='/signup']").click()
    cy.get("[name='firstName']").type('Ricardo')
    cy.get("[name='lastName']").type('Molina')
    cy.get("[name='username']").type('rimo1357')
    cy.get("[name='password']").type('13572468')
    cy.get("[name='confirmPassword']").click()
    cy.get("[data-test='signup-confirmPassword']") 
  })

  it('User Registration Fail - Password Does Not Match', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[href='/signup']").click()
    cy.get("[name='firstName']").type('Ricardo')
    cy.get("[name='lastName']").type('Molina')
    cy.get("[name='username']").type('rimo1357')
    cy.get("[name='password']").type('13572468')
    cy.get("[name='confirmPassword']").type('test')
    cy.get("[data-test='signup-confirmPassword']") 
  })

})



