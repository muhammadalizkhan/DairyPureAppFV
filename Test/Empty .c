- (void)testEmptyCartAfterCheckout {
    Cart *cart = [[Cart alloc] init];
    Item *milk = [[Item alloc] initWithName:@"Milk" price:5.0];
    [cart addItem:milk];
    
    Checkout *checkout = [[Checkout alloc] initWithCart:cart];
    [checkout processPaymentWithMethod:@"Credit Card"];
    
    XCTAssertEqual([cart.items count], 0, @"Cart should be emptied after checkout.");
}
