describe('User Registration', () => {


  const BASE_URL = 'http://localhost:3000/signin'

  
  const Chance = require('chance')
  const chance = new Chance()


  const firstName = chance.first()
  const lastName = chance.last()
  const userName = chance.word({ length: 6 })
  const password = chance.string({ length: 6 })
  const routingNumber = chance.string({ length: 9, pool: '123456789' })
  const accountNumber = chance.string({ length: 9, pool: '123456789' })
  const bankName = chance.last({ length: 6 })
  const confirmPassword = password
  const confirmUserName = userName
    

  const selectors = {
    buttonSignup: "[href='/signup']",
    buttonSubmitSignup: "[data-test='signup-submit']",
    buttonSubmitUser: "[type='submit']",
    buttonNext: "[data-test='user-onboarding-next']",
    buttonAccountSubmit: "[data-test='bankaccount-submit']",
    fistNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    userNameField: "[name='username']",
    passwordField: "[name='password']",
    confirmPasswordField: "[name='confirmPassword']",
    checkDialogUser: "[data-test='user-onboarding-dialog-content']",
    bankNameField: "[name='bankName']", 
    routingNumberField: "[name='routingNumber']", 
    accountNumberField: "[name='accountNumber']",
    checkFistname: '#firstName-helper-text',
    checkLastName: '#lastName-helper-text',
    checkUserName: '#username-helper-text', 
    checkPassword: '#password-helper-text',
    checkConfirmPassword: '#confirmPassword-helper-text',
  }


  const userData = {
    firstNameR: 'Ricardo',
    lastNameR: 'Molina',
    userNameR: 'rimo1357',
    passwordR: '13572468',
    passwordAlternative: 'test44',
    bankOf: 'Bank Of '
  }


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


  it('New User Registration Success', () => {
    cy.visit(BASE_URL)
    cy.get(selectors.buttonSignup).click()
    cy.get(selectors.fistNameField).type(firstName)
    cy.get(selectors.lastNameField).type(lastName)
    cy.get(selectors.userNameField).type(userName)
    cy.get(selectors.passwordField).type(password)
    cy.get(selectors.confirmPasswordField).type(confirmPassword)
    cy.get(selectors.buttonSubmitSignup).click()
    cy.get(selectors.userNameField).type(confirmUserName)
    cy.get(selectors.passwordField).type(confirmPassword)
    cy.get(selectors.buttonSubmitUser).click()
    cy.get(selectors.checkDialogUser)
    cy.get(selectors.buttonNext).click()
    cy.get(selectors.bankNameField).type(userData.bankOf).type(bankName)
    cy.get(selectors.routingNumberField).type(routingNumber)
    cy.get(selectors.accountNumberField).type(accountNumber)
    cy.get(selectors.buttonAccountSubmit).click()
    cy.get(selectors.checkDialogUser)
    cy.get(selectors.buttonNext).click()
  })


  it('User Registration Fail - Incomplete Information - Fist Name', () => {
    cy.visit(BASE_URL)
    cy.get(selectors.buttonSignup).click()
    cy.get(selectors.fistNameField).click() 
    cy.get(selectors.lastNameField).type(userData.lastNameR)
    cy.get(selectors.userNameField).type(userData.userNameR)
    cy.get(selectors.passwordField).type(userData.passwordR)
    cy.get(selectors.confirmPasswordField).type(userData.passwordR)
    cy.get(selectors.checkFistname) 
  })


  it('User Registration Fail - Incomplete Information - Last Name', () => {
    cy.visit(BASE_URL)
    cy.get(selectors.buttonSignup).click()
    cy.get(selectors.fistNameField).type(userData.firstNameR)
    cy.get(selectors.lastNameField).click()
    cy.get(selectors.userNameField).type(userData.userNameR)
    cy.get(selectors.passwordField).type(userData.passwordR)
    cy.get(selectors.confirmPasswordField).type(userData.passwordR)
    cy.get(selectors.checkLastName) 
  })


  it('User Registration Fail - Incomplete Information - Username', () => {
    cy.visit(BASE_URL)
    cy.get(selectors.buttonSignup).click()
    cy.get(selectors.fistNameField).type(userData.firstNameR)
    cy.get(selectors.lastNameField).type(userData.lastNameR)
    cy.get(selectors.userNameField).click()
    cy.get(selectors.passwordField).type(userData.passwordR)
    cy.get(selectors.confirmPasswordField).type(userData.passwordR)
    cy.get(selectors.checkUserName) 
  })

  
  it('User Registration Fail - Incomplete Information - Password', () => {
    cy.visit(BASE_URL)
    cy.get(selectors.buttonSignup).click()
    cy.get(selectors.fistNameField).type(userData.firstNameR)
    cy.get(selectors.lastNameField).type(userData.lastNameR)
    cy.get(selectors.userNameField).type(userData.userNameR)
    cy.get(selectors.passwordField).click()
    cy.get(selectors.confirmPasswordField).type(userData.passwordR)
    cy.get(selectors.checkPassword) 
  })


  it('User Registration Fail - Incomplete Information - Confirm Password', () => {
    cy.visit(BASE_URL)
    cy.get(selectors.buttonSignup).click()
    cy.get(selectors.fistNameField).type(userData.firstNameR)
    cy.get(selectors.lastNameField).type(userData.lastNameR)
    cy.get(selectors.userNameField).type(userData.userNameR)
    cy.get(selectors.passwordField).type(userData.passwordR)
    cy.get(selectors.confirmPasswordField).click()
    cy.get(selectors.fistNameField).click()
    cy.get(selectors.checkConfirmPassword)
  })


  it('User Registration Fail - Password Does Not Match', () => {
    cy.visit(BASE_URL)
    cy.get(selectors.buttonSignup).click()
    cy.get(selectors.fistNameField).type(userData.firstNameR)
    cy.get(selectors.lastNameField).type(userData.lastNameR)
    cy.get(selectors.userNameField).type(userData.userNameR)
    cy.get(selectors.passwordField).type(userData.passwordR)
    cy.get(selectors.confirmPasswordField).type(userData.passwordAlternative)
    cy.get(selectors.checkConfirmPassword)
  })

  
})
