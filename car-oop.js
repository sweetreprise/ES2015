class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    
    revEngine() {
        return "VROOM!!!"
    }
}

class Garage {
    constructor() {
        this.vehicles = [];
        this.capacity = 4;
    }

    add(newVehicle) {
        if(this.vehicles.length >= this.capacity) {
            return "Sorry, we're full."
        }

        if(newVehicle instanceof Vehicle === true) {
        this.vehicles.push(newVehicle);
        } else {
            return "Only vehicles are allowed in here!";
        }
    }
}