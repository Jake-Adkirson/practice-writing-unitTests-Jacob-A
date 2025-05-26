const { addItem, removeItem, getTotalItems } = require('../cart.js');

describe("addItem", function() {

    test("should add item with valid name and quantity",                   // test for negative, positive, and edge case
function() {
    let myCart = [];
    addItem(myCart, "Apples", 2);
    expect(myCart).toEqual([{item: "Apples", quantity: 2}]);
   });

   test("should not take negative quantity", 
function() {
    let myCart = [];
    addItem(myCart, "Apples", -45);
    expect(myCart.quantity).toBe(undefined);
    }); 

    test("should not take 0 as quantity",
function() {
    let myCart = [];
    addItem(myCart, "Apples", 0);
    expect(myCart.quantity).toBe(undefined);
    });
});

describe("removeItem", function() {

    test("should remove item from cart",
function() {
    let myCart = [{item: "Apples", quantity: 5},
       {item: "Bananas", quantity: 3},
       {item: "Strawberries", quantity: 6}
    ];
    expect(removeItem(myCart, "Apples")).toEqual([{item: "Bananas", quantity: 3},
       {item: "Strawberries", quantity: 6}]);
    });

    test("should not run if item is not in cart",
function() {
    let myCart = [{item: "Apples", quantity: 2}];
    expect(removeItem(myCart, "Bananas")).toEqual(myCart);
    });

    test("should remove last item from cart",
function() {
        let myCart = [{item: "Apples", quantity: 2}];
        expect(removeItem(myCart, "Apples")).toEqual([]);
    });

});

describe("getTotalItems", function() {

    test("should calculate total number of items",
function() {
    let myCart = [{item: "Apples", quantity: 5},
       {item: "Bananas", quantity: 3},
       {item: "Strawberries", quantity: 6}
    ];
    expect(getTotalItems(myCart)).toEqual(14);
    });

    test("should show 0 if cart is empty",
function() {
    let myCart = [];
    expect(getTotalItems(myCart)).toEqual(0);
    });

    test("should calculate large amount of items",
function() {
    let myCart = [{item: "Apples", quantity: 500},
       {item: "Bananas", quantity: 1500},
       {item: "Strawberries", quantity: 2000}
    ];
    expect(getTotalItems(myCart)).toEqual(4000);
    });
});