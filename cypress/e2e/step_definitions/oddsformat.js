import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const sportsPage = require("../../pages/SportsPage");

Given ("User clicks on format dropdown", () => {
    cy.get('div#priceFormat').click({force: true})
})

When ("User changes odds format to Decimal", () => {
    cy.get('a#Decimal').click({force: true})
})

When ("User changes odds format to American", () => {
    cy.get('a#American').click({force: true})
})

When ("User changes odds format to Fraction", () => {
    cy.get('a#Fraction').click({force: true})
})

Then("All bets should change their formats to Decimal", () => {
    //Verifying the format contains a '.'
    cy.get('a[eventmodule="REQUEST_A_BET_HOMEPAGE"]').eq(0)
    .invoke('text')
    .then(($text) => {
        expect($text.trim()).to.match(/[.]/g)
    })
})

Then("All bets should change their formats to American", () => {
    //Verifying the format contains a '+'
    cy.get('a[eventmodule="REQUEST_A_BET_HOMEPAGE"]').eq(0)
    .invoke('text')
    .then(($text) => {
        expect($text.trim()).to.match(/[+]/g)
    })
})

Then("All bets should change their formats to Fraction", () => {
    //Verifying the format contains a '/'
    cy.get('a[eventmodule="REQUEST_A_BET_HOMEPAGE"]').eq(0)
    .invoke('text')
    .then(($text) => {
        expect($text.trim()).to.match(/[/]/g)
    })
})