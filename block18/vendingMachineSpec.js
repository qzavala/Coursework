//Happy Path
  // Vending Machine displays price of goods
  // User Pays
  // cash, card, pay apps
  // User Selects Items
  // Press Button
  // Depense Item that the user selected (not another item)
  // Vending machine charges for price of item
  // Return Change (if applicable)

//Unhappy Path
  // User selects items that is out of stuck
  // User selects an item without paying
  // Payment method is wonky/not accepted
  // Wet bills
  // Big bills
  // Item gets stuck 
  // Money/Coins are full
  // User changes mind and wants money back
  // No change available

  // Specs
     // When a user sees the vending machine, the prices should be displayed
     // The vending machine should be able to accept INSERT_PAYMENT_METHOD
     // The vending machine should be able to dispense an item when the user pays and selects item
     // Vending machine then accepts the payment
     // Vending machine should return correct change if applicable
     // When an item is out stock:
       // the vending machine should not dispense the item
       // it should not charge user
       // it should not charge the user
    // Vending machine should display message to user that payment is required if item is selected without paying
    // Vending machine  should display message to user that payment methof is not accepted
    // Item gets stuck, money is refunded and technician is notified
    // 
