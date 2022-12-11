"use strict";
class Vehicle {
    constructor(engineType, type, speed, color) {
        this.engineType = engineType;
        this.type = type;
        this.speed = speed;
        this.color = color;
        Vehicle.count += 1;
    }
    showCount() {
        console.log('Vehicle serial number: ' + Vehicle.count);
    }
    showEngineType() {
        console.log('Engine Type: ' + this.engineType);
    }
    showType() {
        console.log('Type: ' + this.type);
    }
    showSpeed() {
        console.log('Speed: ' + this.speed);
    }
    showColor() {
        console.log('Color: ' + this.color);
    }
    speedTuning(speed) {
        this.speed = speed;
        console.log('Speed increased to: ' + this.speed);
    }
    colorChange(color) {
        this.color = color;
        console.log('Color changed to: ' + this.color);
    }
}
Vehicle.count = 0;
class TuningVehicle extends Vehicle {
    constructor(spoiler, nitro, lightning) {
        super('fuel', 'bus', 150, 'yellow');
        this.spoiler = spoiler;
        this.nitro = nitro;
        this.lightning = lightning;
    }
    addSpoiler() {
        this.spoiler = true;
        console.log('+ Spoiler');
    }
    checkSpoiler() {
        this.spoiler === true ? console.log('Spoiler +') : console.log('Spoiler -');
    }
    addNitro() {
        this.nitro = true;
        console.log('+ Nitro');
    }
    checkNitro() {
        this.nitro === true ? console.log('Nitrogen +') : console.log('Nitrogen -');
    }
    addLightning() {
        this.lightning = true;
        console.log('+ Lightning');
    }
    checkLightning() {
        this.lightning === true
            ? console.log('Lightning +')
            : console.log('Lightning -');
    }
    showStartOptions() {
        super.showCount();
        super.showEngineType();
        super.showType();
        super.showSpeed();
        super.showColor();
    }
    checkTuning() {
        this.checkSpoiler();
        this.checkNitro();
        this.checkLightning();
    }
    fullTuning(speed, color) {
        this.addSpoiler();
        this.addNitro();
        this.addLightning();
        super.speedTuning(speed);
        super.colorChange(color);
        console.log('Your car is full tuned');
    }
    showCharacteristics() {
        this.showStartOptions();
        this.checkTuning();
    }
}
//# sourceMappingURL=index.js.map