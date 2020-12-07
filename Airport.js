const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/militaryType');
const ExperimentalPlane = require('./Planes/ExperimentalPlane');

class Airport {

    getPassengerPlanes() {                       
        return this.getPlaneByType(PassengerPlane);
    }

    getMilitaryPlanes() {
        return this.getPlaneByType(MilitaryPlane);
    }

    getExperimentalPlanes() {
        return this.getPlaneByType(ExperimentalPlane);
    }

    getPlaneByType(type){
        let planeByType = [];
        this.planes.forEach(plane =>{
            if (plane instanceof type){
                planeByType.push(plane);
            }
        })
        return planeByType;
    }

    getMilitaryPlanesByType(type){
        let militaryPlanesByType = [];

        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].getMilitaryType() == type) {
                militaryPlanesByType.push(militaryPlanes[i]);
            }
        }
        return militaryPlanesByType;
    }


    getPassengerPlaneWithMaxPassengersCapacity() {
        let passengerPlanes = this.getPassengerPlanes();
        let planeWithMaxCapacity = passengerPlanes[0];
        for (let i = 0; i < passengerPlanes.length; i++) {
            if (passengerPlanes[i].getPassengersCapacity() > planeWithMaxCapacity.getPassengersCapacity()) {
                planeWithMaxCapacity = passengerPlanes[i];
            }
        }
        return planeWithMaxCapacity;
    }

    getTransportMilitaryPlanes() {
        return this.getMilitaryPlanesByType(MilitaryType.TRANSPORT);
    }


    getBomberMilitaryPlanes() {
        return this.getMilitaryPlanesByType(MilitaryType.BOMBER);
    }

    constructor(planes) {
        this.planes = planes;
    }


    sortByMaxDistance() {
        this.planes.sort((a, b) => (a.getMaxFlightDistance() > b.getMaxFlightDistance()) ? 1 : -1);
        return this;
    }

    sortByMaxSpeed() {
        this.planes.sort((a, b) => (a.getMaxSpeed() > b.getMaxSpeed()) ? 1 : -1);
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) => (a.getMinLoadCapacity() > b.getMinLoadCapacity()) ? 1 : -1);
        return this;
    }

    getPlanes() {
        return this.planes;
    }

    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
