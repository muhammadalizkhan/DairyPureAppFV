- (void)testAddingItemsToCart {
    Cart *cart = [[Cart alloc] init];
    Item *item = [[Item alloc] initWithName:@"Milk" price:5.0];
    
    [cart addItem:item];
    
    XCTAssertEqual([cart.items count], 1, @"Item should be added to the cart.");
    XCTAssertEqualObjects([cart.items firstObject], item, @"The added item should be the same as the one in the cart.");
}
