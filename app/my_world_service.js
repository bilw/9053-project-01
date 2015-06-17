    


var MyWorldService = function(){

}

var rock, paper, scissors;
var moe, larry, curly, shep;
var service;

var things = [rock, paper, scissors];
var people = [moe, larry, curly, shep];
var service = new MyWorldService(people, things);


function Thing(config){
    this.name = config.name;
    this.numberInStock = config.numberInStock;
    this.numberOwned = config.numberOwned;
}

function Person(config){
    this.name = config.name;
    this.active = config.active;
}

//var rock = new Thing("rock");

//var moe = new Person("moe");
