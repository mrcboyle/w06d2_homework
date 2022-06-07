const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
}


Park.prototype.numberOfDinosaurs = function () {
    return this.collectionOfDinosaurs.length;
}

Park.prototype.addDinosaur = function () {
    this.collectionOfDinosaurs.push();
}

Park.prototype.removeDinosaurByName = function () {

}

module.exports = Park;

