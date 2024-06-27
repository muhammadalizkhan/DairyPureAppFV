- (void)testUpdatingItemQuantityInCart {
    Cart *cart = [[Cart alloc] init];
    Item *item = [[Item alloc] initWithName:@"Milk" price:5.0];
    
    [cart addItem:item];
    [cart updateQuantityForItem:item quantity:3];
    
    XCTAssertEqual([cart quantityForItem:item], 3, @"The quantity of the item should be updated.");
}
