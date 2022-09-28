# poker-stars-tests
Cucumber Test scenarios for pokerstars.uk/sports page

Task 1

    Feature: Add/delete from bet slip

        This feature handles scenarios to add and remove bets from bet slip

        Scenario: Add bet to bet slip
        Given User has launched site
        And The bet is not already added to the slip
        When User clicks on a bet against a match
        Then The bet should be added to the slip

        Scenario: Remove bet from bet slip by clicking on the bet against a match
        Given User has launched site
        When The bet is already added to the slip
        And User clicks on the bet again
        Then The bet should be removed from the slip

        Scenario: Remove bet from bet slip by clicking on delete button
        Given User has launched site
        When The bet is already added to the slip
        And User clicks on remove button against a bet in bet slip
        Then The bet should be removed from the slip
        
        Scenario: Remove all bets from bet slip by clicking remove all button
        Given User has launched site
        When Multiple bets are added to the slip
        And User clicks on Remove All button in bet slip
        Then All bets should be removed from the slip
        
        Scenario: Verify the Total bet amount in bet slip
        Given User has launched site
        When Multiple bets are added to the slip
        Then Total bet amount in bet slip should be the sum of all added bets

Task 2

    Feature: Change Odds Format

        This feature handles scenarios to odd format

        Scenario: Change odds format to Decimal
        Given User has launched site
        And User clicks on format dropdown
        When User changes odds format to Decimal
        Then All bets should change their formats to Decimal

        Scenario: Change odds format to American
        Given User has launched site
        And User clicks on format dropdown
        When User changes odds format to American
        Then All bets should change their formats to American

        Scenario: Change odds format to Fraction
        Given User has launched site
        And User clicks on format dropdown
        When User changes odds format to Fraction
        Then All bets should change their formats to Fraction

Instructions to run tests
        
        1. Download code from GitHub to local folder
        2. Open folder in VScode to execute code
        3. Open Terminal and run command "npx cypress open"
        4. Select the feature files one by one to run them separately
        5. Select End-to-end testing and run the tests in Chrome
