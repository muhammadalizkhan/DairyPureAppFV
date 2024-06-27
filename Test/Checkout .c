- (void)testCheckoutProcess {
    Cart *cart = [[Cart alloc] init];
    Item *milk = [[Item alloc] initWithName:@"Milk" price:5.0];
    [cart addItem:milk];
    
    Checkout *checkout = [[Checkout alloc] initWithCart:cart];
    BOOL success = [checkout processPaymentWithMethod:@"Credit Card"];
    
    XCTAssertTrue(success, @"Checkout process should complete successfully.");
}
