function PlacesIBeen() {
    this.places = {};
    this.currentId = 0;
}
PlacesIBeen.prototype.addPlace = function(place) {
    place.id = this.assignId();
    this.places[place.id] = place;
};
PlacesIBeen.prototype.assignId = function() {
    this.currentId +=1;
    return this.currentId;
};

PlacesIBeen.prototype.findPlace = function(id) {
    if(this.places[id] !== undefined) {
        return this.places[id];
    }
    return false;
}

PlacesIBeen.prototype.deletePlace = function(id) {
    if(this.places[id] === undefined) {
        return false;
    }
    delete this.places[id];
    return true;
};

function Place(location, landmarks, timeOfYear, notes) {
    this.location = location
    this.landmarks = landmarks
    this.timeOfYear = timeOfYear
    this.notes = notes
}
// let destination1 = new Places("portland", "bridges", "june", "rain");
// console.log(destination1);
