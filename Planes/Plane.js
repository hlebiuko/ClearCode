class Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.maxFlightDistance = maxFlightDistance;
        this.maxLoadCapacity = maxLoadCapacity;
    }

    getModel() {
        return this.model;
    }

    setModel(model){
        this.model=model;
    }


    getMaxSpeed() {
        return this.maxSpeed;
    }

    setMaxSpeed(maxSpeed){
        this.maxSpeed=maxSpeed;
    }


    getMaxFlightDistance() {
        return this.maxFlightDistance;
    }

    setMaxFlightDistance(maxFlightDistance){
        this.maxFlightDistance=maxFlightDistance;
    }


    getMinLoadCapacity() {
     let result = this.maxLoadCapacity;
     return result;
    }

    setMinLoadCapacity(minLoadCapasity){
        this.minLoadCapasity=minLoadCapasity;
    }
}

module.exports = Plane;
