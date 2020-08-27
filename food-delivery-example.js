let menu = {
  p01: {
    id: "p01",
    name: "Cheeseburger",
    price: 10,
    description: "Cheese, meat and bun. Ketchup included"
  },

  p02: {
    id: "p02",
    name: "Burrito",
    price: 15,
    description: "Fully loaded burrito"
  },

  p03: {
    id: "p03",
    name: "Vegan Fruit Bowl",
    price: 150,
    description: "a little pricey, but you'll feel better"
  },

  getItemByID: function(itemID) {
    // should return a sentence containing all of the info about the product (name price, and description)
    console.log(menu[itemID]);
  },

  getItemByName: function(itemName) {
    // should return a sentence containing all of the info about the product (name price, and description)
    let hello = Object.keys(menu);
    for (x = 0; x < hello.length; x++) {
      if (Object.values(menu)[x].name === itemName) {
        console.log(Object.values(menu)[x]);
      }
    }
  },

  addMenuItem: function(name, price, desc) {
    //will need a random id as well when creating a new product. console log the products to confirm it was added.
    var id = Math.random()
      .toString(36)
      .slice(-3);
    menu[id] = { id: id, name: name, price: price, description: desc };
    console.log(menu[id]);
  },

  cartTotal: function(arrayOfIDs) {
    // this function will take in an array of item Ids, and using this, will add together the total cost of all the items.
    let happy = 0;
    for (x = 0; x < arrayOfIDs.length; x++) {
      if (Object.keys(menu).includes(arrayOfIDs[x])) {
        happy = happy + menu[arrayOfIDs[x]].price;
      }
    }
    console.log(happy);
  }
};

// 1
// menu.getItemByID("p01");

// 2
// menu.getItemByName("Burrito");

// 3
// menu.addMenuItem("Yumi", "100", "Tomato, banana and coffee");

// 4
// menu.cartTotal(["p01","p03"]);
