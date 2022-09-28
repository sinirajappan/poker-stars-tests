import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const sportsPage = require("../../pages/SportsPage");

Given ("User has launched site", () => {
    sportsPage.launchSportsPage()
})

When ("User clicks on a bet against a match", () => {
    sportsPage.clickFirstBet()
})

When("The bet is already added to the slip and User clicks on the bet again", () => {
    sportsPage.clickFirstBet()

    //Verifying bet is already added to bet slip
    cy.get('a[eventmodule="REQUEST_A_BET_HOMEPAGE"]').eq(0)
        .should('have.class',"selected")
    
    cy.wait(1000)
    sportsPage.clickFirstBet()
})

When("The bet is already added to the slip and User clicks on remove button against a bet in bet slip", () => {  
    sportsPage.clickFirstBet()

    //Verifying bet is already added to bet slip
    cy.get('a[eventmodule="REQUEST_A_BET_HOMEPAGE"]').eq(0)
        .should('have.class',"selected")
    
    //Clicking on bet slip icon
    sportsPage.clickBetSlip()

    //Retrieving betID
    let betIdvar 
    cy.get('a[eventmodule="REQUEST_A_BET_HOMEPAGE"]').eq(0)
        .should('have.class',"selected")
        .then(($title) => {
            betIdvar = $title.attr('id').match(/[0-9]+/g)
        })

    //To remove a bet from bet slip
    cy.get('li[class*=bet-slip__selection]').each(($li) => {
        let slipBetId = $li.attr('id').match(/[0-9]+/g)
        expect(slipBetId[0]).to.eq(betIdvar[0])
        if (slipBetId[0] == betIdvar[0]) {
            cy.wrap($li).find('a[title="Remove selection"]').click({force: true})
        }
    })

    sportsPage.clickBetSlip()
})

Given ("The bet is not already added to the slip", () => {
    cy.get('a[eventmodule="REQUEST_A_BET_HOMEPAGE"]').eq(0)
        .should('not.have.class',"selected")
})

Then ("The bet should be added to the slip", () => {
    //Retrieving betID

    let betIdvar 
    cy.get('a[eventmodule="REQUEST_A_BET_HOMEPAGE"]').eq(0)
        .should('have.class',"selected")
        .then(($title) => {
         betIdvar = $title.attr('id').match(/[0-9]+/g)
         })

    //Clicking on bet slip icon
    sportsPage.clickBetSlip()

    //Verifying the bet slip for the added betID
    cy.get('li[class*=bet-slip__selection]').each(($li) => {
        let slipBetId = $li.attr('id').match(/[0-9]+/g)
        expect(slipBetId[0]).to.eq(betIdvar[0])
    })
})

Then ("The bet should be removed from the slip", () => {
    //Clicking on bet slip icon
    sportsPage.clickBetSlip()

    //Retrieving betID
    let betIdvar 
    cy.get('a[eventmodule="REQUEST_A_BET_HOMEPAGE"]').eq(0)
        .should('have.class',"selected")
        .then(($title) => {
         betIdvar = $title.attr('id').match(/[0-9]+/g)
         })

    //Verifying deleted bet has been removed
    if (Cypress.$('p.noBets').length > 0 ) {
        cy.get('div.singleBetView > ul.bet-selections').should('not.exist')         
    } else {
        cy.get('div.singleBetView > ul.bet-selections')
        .find('li[class*=bet-slip__selection]').each(($li) => {
            let slipBetId = $li.attr('id').match(/[0-9]+/g)
            expect(slipBetId[0]).to.not.eq(betIdvar[0])
        })
    }
})