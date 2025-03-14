
describe('Send Money', () => {
   
    it('Sending Money With Sufficient Funds', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get("[name='username']").type('Heath93')
        cy.get("[name='password']").type('s3cret')
        cy.get("[type='submit']").click()
        cy.get("[data-test='nav-top-new-transaction']").click()
        cy.get("[data-test='user-list-item-nqDe1_l8F']").click()
        cy.get("[data-test='transaction-create-amount-input']").type('2500') 
        cy.get("[data-test='transaction-create-description-input']").type('Send Money')
        cy.get("[data-test='transaction-create-submit-payment']").click()
        cy.get("[data-test='sidenav-signout']").click()
        cy.get("[name='username']").type('rimo1357')
        cy.get("[name='password']").type('13572468')
        cy.get("[type='submit']").click()
        cy.get("[data-test='nav-top-new-transaction']").click()
        cy.get("[data-test='user-list-item-uBmeaz5pX']").click()
        cy.get("[data-test='transaction-create-amount-input']").type('2000') 
        cy.get("[data-test='transaction-create-description-input']").type('Test Send Money')
        cy.get("[data-test='transaction-create-submit-payment']").click()
        cy.get("[data-test='alert-bar-success']")

    })

    it('Sending Money With Insufficient Funds', () => {

        cy.visit('http://localhost:3000/signin')
        cy.get("[name='username']").type('Heath93')
        cy.get("[name='password']").type('s3cret')
        cy.get("[type='submit']").click()
        cy.get("[data-test='nav-top-new-transaction']").click()
        cy.get("[data-test='user-list-item-nqDe1_l8F']").click()
        cy.get("[data-test='transaction-create-amount-input']").type('5210') 
        cy.get("[data-test='transaction-create-description-input']").type('Send Money')
        cy.get("[data-test='transaction-create-submit-payment']").click()
        cy.get("[data-test='sidenav-signout']").click()
        cy.get("[name='username']").type('rimo1357')
        cy.get("[name='password']").type('13572468')
        cy.get("[type='submit']").click()
        
        // CAPTURE CURRENT BALANCE
        cy.get("[data-test='sidenav-user-balance']").invoke('text').then((texto) => {
            const accountBalance = parseFloat(texto.replace('$', '').trim())
        cy.log('Initial Balance:', accountBalance)

        // SEND MONEY
        cy.get("[data-test='nav-top-new-transaction']").click()
        cy.get("[data-test='user-list-item-uBmeaz5pX']").click()
        cy.get("[data-test='transaction-create-amount-input']").type('430000') 
        cy.get("[data-test='transaction-create-description-input']").type('Test Send Money')
        cy.get("[data-test='transaction-create-submit-payment']").click()
        cy.wait(1000)
    
        // CAPTURE CURRENT BALANCE AND CHECK IF IT HAS CHANGED
        cy.get("[data-test='sidenav-user-balance']").invoke('text').then((novoTexto) => {
            const finalbalance = parseFloat(novoTexto.replace('$', '').trim())
        cy.log('Saldo Final:', finalbalance)
        expect(finalbalance).to.eq(accountBalance, 'Error! Balance should not have changed!')
            
        })

        })

    })

})





















