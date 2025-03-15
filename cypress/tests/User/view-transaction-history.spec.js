describe('View Transaction History', () => {


    const BASE_URL = 'http://localhost:3000/signin'


    const selectors = {
        buttonSubmitUser: "[type='submit']",
        buttonMine: "[data-test='nav-personal-tab']",
        userNameField: "[name='username']",
        passwordField: "[name='password']",
        checkYesTransaction: "[data-test='transaction-item-G27CsoUC6']",
        checkNoTrasactions: "[data-test='empty-list-header']"     
    }
        

    const userData = {
        userNameR: 'rimo1357',
        passwordR: '13572468',
        userNameNew: 'new-user-not-history',
        passwordNew: '13572468'
    }


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


    it('Successfully View Transaction History', () => {
        cy.visit(BASE_URL)
        cy.get(selectors.userNameField).type(userData.userNameR)
        cy.get(selectors.passwordField).type(userData.passwordR)
        cy.get(selectors.buttonSubmitUser).click()
        cy.get(selectors.buttonMine).click()
        cy.get(selectors.checkYesTransaction)
    })


    it('Trying To View Transaction History For A User With No Previous Transactions', () => {
        cy.visit(BASE_URL)
        cy.get(selectors.userNameField).type(userData.userNameNew)
        cy.get(selectors.passwordField).type(userData.passwordNew)
        cy.get(selectors.buttonSubmitUser).click()
        cy.get(selectors.buttonMine).click()
        cy.get(selectors.checkNoTrasactions)
    })


})