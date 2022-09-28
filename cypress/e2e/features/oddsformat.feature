Feature: Change Odds Format

    This feature handles scenarios to odd format

    Scenario: Change odds format to Decimal
    Given User has launched site
    Given User clicks on format dropdown
    When User changes odds format to Decimal
    Then All bets should change their formats to Decimal

    Scenario: Change odds format to American
    Given User has launched site
    Given User clicks on format dropdown
    When User changes odds format to American
    Then All bets should change their formats to American

    Scenario: Change odds format to Fraction
    Given User has launched site
    Given User clicks on format dropdown
    When User changes odds format to Fraction
    Then All bets should change their formats to Fraction