describe('Login', () => {


    const BASE_URL = 'http://localhost:3000/signin'

    
    const selectors = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        buttonSubmitLogin: "[type='submit']",
        checkLogin: "[data-test='nav-public-tab']",
        checkErrorLogin: "[data-test='signin-error']",
    }


    const userData = {
        usernameFull: 'rimo1357',
        passwordFull: '13572468',
        usernameFail: 'test10',
        passwordFail: 'test10'
    }


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
    

    it('Login Success', () => {
        cy.visit(BASE_URL)
        cy.get(selectors.usernameField).type(userData.usernameFull)
        cy.get(selectors.passwordField).type(userData.passwordFull)
        cy.get(selectors.buttonSubmitLogin).click()
        cy.get(selectors.checkLogin)
    })


    it('Login Fail - User Fail', () => {
        cy.visit(BASE_URL)
        cy.get(selectors.usernameField).type(userData.usernameFail)
        cy.get(selectors.passwordField).type(userData.passwordFull)
        cy.get(selectors.buttonSubmitLogin).click()
        cy.get(selectors.checkErrorLogin)
    })


    it('Login Fail - Password Fail', () => {
        cy.visit(BASE_URL)
        cy.get(selectors.usernameField).type(userData.usernameFull)
        cy.get(selectors.passwordField).type(userData.passwordFail)
        cy.get(selectors.buttonSubmitLogin).click()
        cy.get(selectors.checkErrorLogin)
    })
  
    
})





















