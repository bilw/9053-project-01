/*globals describe beforeEach it expect Thing MyWorldService Person */
describe("MyWorldService", function() {
  var rock, paper, scissors;
  var moe, larry, curly, shep;
  var service;

  beforeEach(function() {
    rock = new Thing({
      name: "Rock",
      numberInStock: 2,
      numberOwned: 1
    });
    paper = new Thing({
      name: "Paper",
      numberInStock: 3
    });
    scissors = new Thing({
      name: "Scissors",
      numberInStock: 3
    });

    moe = new Person({
      name: "Moe",
      active: true,
    });
    larry = new Person({
      name: "Larry",
      active: true
    });
    curly = new Person({
      name: "Curly",
      active: true,
      things: ["Rock"]
    });
    shep = new Person({
      name: "Shep"
    });

    var people = [moe, larry, curly, shep];
    var things = [rock, paper, scissors];
    service = new MyWorldService(people, things);
  });

  describe("rock", function() {
    it("name is rock", function() {
      expect(rock.name).toEqual("Rock");
    });
  });
  describe("paper", function() {
    it("name is paper", function() {
      expect(paper.name).toEqual("Paper");
    });
  });
  describe("moe", function() {
    it("name is moe", function() {
      expect(moe.name).toEqual("Moe");
    });
  });
  describe("curly", function() {
    it("name is curly", function() {
      expect(curly.name).toEqual("Curly");
    });
  });

  // describe("#getPeople", function() {
  //   var allPeople, activePeople;
  //   beforeEach(function() {
  //     allPeople = service.getPeople();
  //     activePeople = service.getPeople(true);
  //   });
  //   it("returns people in alpha order", function() {
  //     expect(allPeople).toEqual([curly, larry, moe, shep]);
  //   });
  //   describe("passing in true for active", function() {
  //     it("returns only active people", function() {
  //       expect(activePeople).toEqual([curly, larry, moe]);
  //     });
  //   });
  // });

});