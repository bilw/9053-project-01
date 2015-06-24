/* globals MyWorldService _ */

var MyWorldService = function(people, things) {
    this.people = people,
    this.things = things
};

var Thing = function(params) {
    var defineParams = { name: 'Rock', numberInStock: 0, numberOwned: 0 };
    var values = _.assign(defineParams, params);
    this.name = values.name,
    this.numberInStock = values.numberInStock,
    this.numberOwned = values.numberOwned
    };

var Person = function(params) {
    this.name = params.name;
    this.active = params.active;
    this.things = params.things;
    
    if (params.things === undefined) {
        this.things = [];
    }
};

MyWorldService.prototype.getPeople = function(active) {
    var thePeople;
    if (active == true)
    thePeople = _.filter(this.people, 'active');
    else 
        thePeople = this.people;
        
    return _.sortBy(thePeople, 'name');
};

MyWorldService.prototype.getPerson = function(name) {
    var gotPerson = {};
    
    _.forEach(this.people, function(obj) {
        if (obj.name == name) {
            gotPerson = obj;
            return false;
        }
    });
    return gotPerson;
};

MyWorldService.prototype.getThings = function() {
    return _.sortBy(this.things, 'name');
};

MyWorldService.prototype.getThing = function(thingName) {
    var thing, gotThing = {};
    
    _.forEach(this.things, function(obj) {
        if (obj.name == thingName) {
            gotThing = obj;
            return false;
        }
    });
    return gotThing;
};

Person.prototype.hasThing = function(thingName) {
    var gotThing = false;
    var personHasThing = _.forEach(this.things, function(name) {
        if (thingName === name)
            return false;
    });
    if (personHasThing.length !== 0)
        gotThing = true;
        return gotThing;
};

MyWorldService.prototype.acquireThing = function(person, thing) {
    var gotThings, personHasThing;
    var validPerson = this.getPerson(person);
    
    var serviceThingObj = this.getThing(thing);
    if (serviceThingObj.numberInStock === 0)
    throw new Error("Currently out of stock: ", thing);
    
    if ((Object.getOwnPropertyNames(validPerson).length === 0) || (validPerson === undefined)) {
        return false;
    }
    else {
        serviceThingObj.numberOwned++;
        serviceThingObj.numberInStock--;
        
        gotThings = validPerson.things;
        
        gotThings.push(thing);
    }
    return true;
};