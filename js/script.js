function PlacesIBeen(){
    this.destinations = {};
    this.currentId = 0;
}
PlacesIBeen.prototype.addDestination = function(destination){
    destination.id = this.assignId();

this.destinations[destination.id] = destination;
};
PlacesIBeen.prototype.assignId = function (){
    this.currentId +=1
    return this.currentId
};
function D(location, landmarks, timeOfYear, notes){
    this.location = location
    this.landmarks = landmarks
    this.timeOfYear = timeOfYear
    this.notes = notes
}

let destination1 = new D("portland", "bridges", "june", "rain");
console.log(destination1);