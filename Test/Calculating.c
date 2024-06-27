- (void)testCalculatingTotalPriceOfCart {
    Cart *cart = [[Cart alloc] init];
    Item *milk = [[Item alloc] initWithName:@"Milk" price:5.0];
    Item *cheese = [[Item alloc] initWithName:@"Cheese" price:10.0];
    
    [cart addItem:milk];
    [cart addItem:cheese];
    
    XCTAssertEqual([cart totalPrice], 15.0, @"The total price should be calculated correctly.");
}
