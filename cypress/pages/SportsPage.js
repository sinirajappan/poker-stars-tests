class sportsPagePokerstars {

    launchSportsPage() {
        cy.visit('/')
        cy.wait(5000)
        
        //Accept Cookies
        cy.get('#onetrust-accept-btn-handler').invoke('show').click();
      }
    
    clickFirstBet() {
        cy.get('a[eventmodule="REQUEST_A_BET_HOMEPAGE"]').eq(0)
            .find('em[class="button__bet__odds"]')
            .click({force: true})
    }

    clickBetSlip() {
        cy.get('.icon-betslip').click({force: true})
    }
}

module.exports = new sportsPagePokerstars();