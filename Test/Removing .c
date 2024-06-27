- (void)testRemovingItemsFromCart {
    Cart *cart = [[Cart alloc] init];
    Item *item = [[Item alloc] initWithName:@"Milk" price:5.0];
    
    [cart addItem:item];
    [cart removeItem:item];
    
    XCTAssertEqual([cart.items count], 0, @"Item should be removed from the cart.");
}
