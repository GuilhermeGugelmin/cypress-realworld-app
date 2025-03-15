describe('Send Money', () => {
   

    const BASE_URL = 'http://localhost:3000/signin'

    
    const selectors = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        buttonSubmitLogin: "[type='submit']",
        buttonNewTrasaction: "[data-test='nav-top-new-transaction']",
        buttonTransfer: "[data-test='transaction-create-submit-payment']",
        buttonLogoff: "[data-test='sidenav-signout']",
        userForTransfer1: "[data-test='user-list-item-nqDe1_l8F']",
        userForTransfer2: "[data-test='user-list-item-uBmeaz5pX']",
        amontTransferFiel: "[data-test='transaction-create-amount-input']",
        descriptionTransfer: "[data-test='transaction-create-description-input']",
        checkTransferSuccess: "[data-test='alert-bar-success']",
        userBalance: "[data-test='sidenav-user-balance']"
    }

    const userData = {
        usernameFull: 'rimo1357',
        passwordFull: '13572468',
        usernameSystem: 'Heath93',
        passwordSystem: 's3cret',
        amont2500: '2500',
        amont2000: '2000',
        amont5200: '5200',
        amont430000: '430000',
        descriptionTransfer: 'Send Money',
    }


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


    it('Sending Money With Sufficient Funds', () => {
        cy.visit(BASE_URL)
        cy.get(selectors.usernameField).type(userData.usernameSystem)
        cy.get(selectors.passwordField).type(userData.passwordSystem)
        cy.get(selectors.buttonSubmitLogin).click()
        cy.get(selectors.buttonNewTrasaction).click()
        cy.get(selectors.userForTransfer1).click()
        cy.get(selectors.amontTransferFiel).type(userData.amont2500) 
        cy.get(selectors.descriptionTransfer).type(userData.descriptionTransfer)
        cy.get(selectors.buttonTransfer).click()
        cy.get(selectors.buttonLogoff).click()
        cy.get(selectors.usernameField).type(userData.usernameFull)
        cy.get(selectors.passwordField).type(userData.passwordFull)
        cy.get(selectors.buttonSubmitLogin).click()
        cy.get(selectors.buttonNewTrasaction).click()
        cy.get(selectors.userForTransfer2).click()
        cy.get(selectors.amontTransferFiel).type(userData.amont2000) 
        cy.get(selectors.descriptionTransfer).type(userData.descriptionTransfer)
        cy.get(selectors.buttonTransfer).click()
        cy.get(selectors.checkTransferSuccess)
    })


    it('Sending Money With Insufficient Funds', () => {
        cy.visit(BASE_URL)
        cy.get(selectors.usernameField).type(userData.usernameSystem)
        cy.get(selectors.passwordField).type(userData.passwordSystem)
        cy.get(selectors.buttonSubmitLogin).click()
        cy.get(selectors.buttonNewTrasaction).click()
        cy.get(selectors.userForTransfer1).click()
        cy.get(selectors.amontTransferFiel).type(userData.amont5200) 
        cy.get(selectors.descriptionTransfer).type(userData.descriptionTransfer)
        cy.get(selectors.buttonTransfer).click()
        cy.get(selectors.buttonLogoff).click()
        cy.get(selectors.usernameField).type(userData.usernameFull)
        cy.get(selectors.passwordField).type(userData.passwordFull)
        cy.get(selectors.buttonSubmitLogin).click()
        // CAPTURE CURRENT BALANCE
        cy.get(selectors.userBalance).invoke('text').then((texto) => {
            const accountBalance = parseFloat(texto.replace('$', '').trim())
        cy.log('Initial Balance:', accountBalance)
        // SEND MONEY
        cy.get(selectors.buttonNewTrasaction).click()
        cy.get(selectors.userForTransfer2).click()
        cy.get(selectors.amontTransferFiel).type(userData.amont430000) 
        cy.get(selectors.descriptionTransfer).type(userData.descriptionTransfer)
        cy.get(selectors.buttonTransfer).click()
        cy.wait(1000)
        // CAPTURE CURRENT BALANCE AND CHECK IF IT HAS CHANGED
        cy.get(selectors.userBalance).invoke('text').then((novoTexto) => {
            const finalbalance = parseFloat(novoTexto.replace('$', '').trim())
        cy.log('Saldo Final:', finalbalance)
        expect(finalbalance).to.eq(accountBalance, 'Error! Balance should not have changed!')
        })
        })
    })

    
})
































































