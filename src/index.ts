abstract class Vehicle {
  private static count: number = 0;
  private options: string[] = [];

  constructor(
    private engineType: 'electro' | 'fuel',
    private type: 'SUV' | 'sedan' | 'hatchback' | 'bus' | 'vane' | 'universal',
    private speed: number,
    private color: string
  ) {
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
  addOption(option: string) {
    this.options.push(option);
  }
  speedTuning(speed: number) {
    this.speed = speed;
    console.log('Speed increased to: ' + this.speed);
  }
  colorChange(color: string) {
    this.color = color;
    console.log('Color changed to: ' + this.color);
  }
  showStartOptions() {
    this.showCount();
    this.showEngineType();
    this.showType();
    this.showSpeed();
    this.showColor();
  }
  abstract startEngine(): boolean;
}

class TuningVehicle extends Vehicle {
  constructor(
    private spoiler: boolean,
    private nitro: boolean,
    private lightning: boolean
  ) {
    super('fuel', 'bus', 150, 'yellow');
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

  checkTuning() {
    this.checkSpoiler();
    this.checkNitro();
    this.checkLightning();
  }
  fullTuning(speed: number, color: string) {
    this.addSpoiler();
    this.addNitro();
    this.addLightning();
    super.speedTuning(speed);
    super.colorChange(color);
    console.log('Your car is full tuned');
  }
  showCharacteristics() {
    super.showStartOptions();
    this.checkTuning();
  }
  startEngine() {
    console.log('Engine was start!');
    return true;
  }
}
