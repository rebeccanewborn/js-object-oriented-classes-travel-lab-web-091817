class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - 1 - this.startDate.getUTCFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    console.log(this.beginningLocation);
    console.log(this.endingLocation);
    let horizDist = Math.abs(
      eastWest.indexOf(this.beginningLocation.horizontal) -
        eastWest.indexOf(this.endingLocation.horizontal)
    );
    let vertDist = Math.abs(
      this.beginningLocation.vertical - this.endingLocation.vertical
    );
    return horizDist + vertDist;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    }
    return this.blocksTravelled() / 3;
  }
}

let eastWest = [
  "1st Avenue",
  "2nd Avenue",
  "3rd Avenue",
  "Lexington Avenue",
  "Park",
  "Madison Avenue",
  "5th Avenue"
];
