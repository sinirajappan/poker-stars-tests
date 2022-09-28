# poker-stars-tests
Cucumber Test scenarios for pokerstars.uk/sports page

Task 1

Feature: Add/delete from bet slip

    This feature handles scenarios to add and remove bets from bet slip

    Scenario: Add bet to bet slip
    Given User has launched site
    Given The bet is not already added to the slip
    When User clicks on a bet against a match
    Then The bet should be added to the slip

    Scenario: Remove bet from bet slip by clicking on the bet against a match
    Given User has launched site
    When The bet is already added to the slip and User clicks on the bet again
    Then The bet should be removed from the slip

    Scenario: Remove bet from bet slip by clicking on delete button
    Given User has launched site
    When The bet is already added to the slip and User clicks on remove button against a bet in bet slip
    Then The bet should be removed from the slip

Task 2


