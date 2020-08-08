// this
// closure

// - take a look over the javascript closure from documentation


// // 1. please waf prototype wich implements the map BUT not returns another instance of the array; mymap

// 	- [1,2,3] ==> [1,4,9] 
// 	arr1 --> arr2

// 	arr1 --> arr1 [1,4,9]

var arr = [1, 2, 3]

Array.prototype.mymap = function (callback) {
    for (let i = 0; i < this.length; i++)
        this[i] = callback(this[i], i);
    return this;
}

console.log(arr.mymap(el => el * 2));
console.log(arr);


// Array.prototype.mymap ....


// 2. Please write a system for a store. 
// The store have n shelf.
// every shelf can have the following settings
// 	- color
// 	- light intensity

// 	- type
// 		- sport
// 		- toys
// 		- jewelry
// 		- clothes
// 		- presentation (the products from this shelf cannot be sold and has no price)
// 	- allowedProductNumbers - how many products can fit into the shelf

var store = {
    shelves: [],
    addShelves: function(shelf){
        this.shelves.push(shelf)
    }
}

var setings = { 
    colour: "green",
    lightIntensity: "true",
    allowedProductNumber: 20,
    
}

function changeColour (colour){
    var colour = "rosu";
            return colour;
}

function changeLightIntesity(light){
            return lightIntensity;
        }


var shelftype = {
    type1: "sport",
    type2: "toys",
    type3: "jewelry",
    type4: "clothes",
    type5: "presentation"
}
    function canNotBeSold (presentation){
        var price = 0;
            return price <= 0 ? 1 : 0
    }

    
var products = {
    cost: "x",
    profit: "y",
    price: "x" + "y",
    code: "abcd",
    type: function(productType){
        return shelfType
    }
    }
    
    var presentation: function()
 
// when the color or light intensity is changed, this setting it will be aplied to all shelf

// On a shelf you can put maximum "allowedProductNumbers" products;
 
// every product has a 
// 	- cost
// 	- profit;
// 	- price = cost + profit
// 	- code; generate 5 random characters
// 	- type (same as shelf type)


// Design a system like this
// the store can:
// 	receive a product; it will be added on a shelf; if there is no shelf, it will return false
// 	provide the sum of all products 
// 	provide the sum of all products for every category
// 	sell a product with a specific code
// 	add more shelfs
// 	reserve a product for a period; in this case the product cannot be sold
// 	the store will keep a history of sold products


// 3. create another store with exact data from 2; 

var  Helper = {
    getRandomString: function() {
        return Math.random().toString(36).substring(7);
    }
}


var settings = {
    color: 'red',
    lightIntensity : 10,
} 

var shelfType = {
    notSET: 0,
    sport: 1,
    toys: 2,
    jewelry: 4,
    clothes: 8,
};

// bitwise operators

function shelf() {
    this.id = Helper.getRandomString();
    this.type = shelfType.notSET;
    this.settings = settings;
    this.allowedProductNumbers = 5;
    this.setProductsNumber = function(n) {
        this.allowedProductNumbers = n;
    }

    this.addProduct = function(shelf) {

    }
    this.removeProduct = function(shelf) {

    }
    this.updateProduct =function(id, product) {

    }

    return this;
}

function product() {
    this.id = Helper.getRandomString();
    this.type = shelfType.notSET;
    var cost = 0;
    var profit = 0;

    this.price = cost + profit;
   

    return this;
}

class productAsClass {
    id = Helper.getRandomString();
    type = shelfType.notSET;
    cost = 0;
    profit = 0;

    price = 0;

    constructor() {
        debugger;
        this.price = this.cost + this.profit;
    }
}


//v1
var productManager = {
    create: function(data) {
        const prod = {
            id: Helper.getRandomString(),
            type: shelfType.jewelry
        };

        prod.cost = data.cost;

        return prod;
    }
}; 


//v2
function productManager1(data){

        var doSomething = function() {
            debugger;
        }

        const prod = {
            id: Helper.getRandomString(),
            type: shelfType.jewelry,
            test: function() {
                debugger;
                this.doSomething();
            }
        };

        prod.cost = data.cost;

        return prod;
}; 


function productManager1Closure(data){

    this.doSomething = function() {
        debugger;
    }

    const prod = {
        id: Helper.getRandomString(),
        type: shelfType.jewelry,
        test: () => {
            debugger;
            this.doSomething();
        }
    };

    prod.cost = data.cost;

    return prod;
}; 

function productManager2(data){

    this.doSomething = function() {
        debugger;
    }

    const prod = {
        id: Helper.getRandomString(),
        type: shelfType.jewelry,
        test: function(){
            debugger;
            this.doSomething();
        }
    };

    prod.cost = data.cost;

    prod.test = prod.test.bind(this);

    return prod;
}; 

var store = {
    shelfs: [],
    shelfService: {
        // shelfs: [],
        addShelf: function(shelf) {
            store.shelfs.push(shelf);
        },
        removeShelf: function(shelf) {
            store.shelfs = store.shelfs.filter(el => el.id !== shelf.id);
        },
        updateShelf: function(id, shelf) {
    
        },
    },
    productService: new genericList,
    // shelfService: new genericList,
};
 function genericList()  {
    this.items =[];
    this.add = function(it) {
        this.items.push(it);        
    }

}


debugger;
var r1 = new shelf();
r1.type = shelfType.sport;

var r2 = new shelf();
r2.type = shelfType.clothes;

store.shelfService.addShelf(r1);
store.shelfService.addShelf(r2);


settings.color = 'yellow';

var r3 = new shelf();
r3.type = shelfType.jewelry;
store.shelfService.addShelf(r3);

debugger; 



