import {checkString} from './checkString.js';

class Oven {
    constructor(maxTemp) {
        if (maxTemp > 15) {
            throw new Error('Максимальная температура не может превышать 15');
        }
        this.maxTemp = maxTemp;
    }
    get maxTemperature() {
        return this.maxTemp;
    }
    set maxTemperature(value) {
        if (value > 15) {
        throw new Error('Максимальное значение температуры не может превышать 15');
        } 
        else if (value < 0) {
            throw new Error('Температура не может быть отрицательной');
        }
        this.maxTemp = value;
    }
}
let oven = new Oven(10);
console.log(oven.maxTemperature);

class ImprovedOven extends Oven {
    constructor(maxTemp) {
        super(maxTemp);
        this.status = 'idle';
        this.temperature = 0;
    }
    startTurningOn() {
        console.log('Started turning on');
        this.status = 'heating';
    }
    increaseTemperatureByOne() {
        if (this.status === 'idle') {
            return;
        }
        if (this.temperature < this.maxTemp) {
            this.temperature++;
        }
    }
    isHeatingComplete() {
        return this.temperature === this.maxTemp;
        }
    completeHeating() {
        this.status = 'complete';
    }
    stopTurningOn() {
        console.log('Stopped turning on');
    }
    decreaseTemperatureByOne(duration) {
        setTimeout(() => {
            if (duration > 0 && this.temperature > 0) {
                this.decreaseTemperatureByOne(duration - 50);
            }       
            else {
                console.log(`Temperature is ${this.temperature}`);
                if (this.temperature === 0) {
                    console.log('Cooling completed');
                    this.stop();
                }
            }
        }, 500);
    }
    coolingComplete() {
        console.log('Cooling Completed');
        this.stop();
    }   
    stop() {
        console.log('Stopping');
        this.status = 'stopped';
    }
}
let improvedOven = new ImprovedOven(15);
console.log(improvedOven.maxTemperature);
improvedOven.startTurningOn().increaseTemperatureByOne().increaseTemperatureByOne();
while (!improvedOven.isHeatingComplete()) {
    improvedOven.increaseTemperatureByOne();
}
improvedOven.completeHeating().decreaseTemperatureByOne(20);


console.log(checkString('Привет, JavaScript!'));
