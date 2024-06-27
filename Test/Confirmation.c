- (void)testOrderConfirmationGeneration {
    Cart *cart = [[Cart alloc] init];
    Item *milk = [[Item alloc] initWithName:@"Milk" price:5.0];
    [cart addItem:milk];
    
    Checkout *checkout = [[Checkout alloc] initWithCart:cart];
    [checkout processPaymentWithMethod:@"Credit Card"];
    OrderConfirmation *confirmation = [checkout generateOrderConfirmation];
    
    XCTAssertNotNil(confirmation, @"Order confirmation should be generated.");
    XCTAssertEqual(confirmation.orderTotal, 5.0, @"Order total should match the cart total.");
}
