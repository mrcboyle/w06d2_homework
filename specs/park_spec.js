const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function () {

  let park;
  let dinosaur;

  beforeEach(function () {
    park = new Park('Dino Park', 20);
    trex = new Dinosaur('t-rex', 'carnivore', 50);
    stegosaurus = new Dinosaur('Stegosaurus', 'Herbivore', 65);
    velociraptor = new Dinosaur('Velociraptor', 'Carnivore', 40);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Dino Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });

  xit('should have a collection of dinosaurs', function () {
    park.addDinosaur(trex);
    park.addDinosaur(stegosaurus);
    park.addDinosaur(velociraptor);
    const actual = park.collectionOfDinosaurs > 0;
    assert.strictEqual(actual, true);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(trex);
    park.addDinosaur(stegosaurus);
    park.addDinosaur(velociraptor);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 3);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(trex);
    park.addDinosaur(stegosaurus);
    park.addDinosaur(velociraptor);
    park.removeDinosaurByName(trex);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day', function () {
    const actual = park.totalVisitorsPerDay();
    assert.strictEqual(actual, 155);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 56575);
  });

  it('should be able to calculate total revenue for one year', function () {
    const actual = park.totalRevenueOneYear();
    assert.strictEqual(actual, 1131500)
  });

});
