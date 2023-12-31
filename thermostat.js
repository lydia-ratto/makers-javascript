class Thermostat {

    constructor() {
        this.temperature = 20
        this.powerSaving = true
    }

    getTemperature() {
        return this.temperature
    }

    up() {
        if (this.powerSaving == true && this.temperature < 25 || this.powerSaving == false && this.temperature < 32) {
            this.temperature += 1
        } 
    }

    down() {
        if (this.temperature > 10) {
            this.temperature -= 1
        } 
    }

    setPowerSavingMode(boolean) {
        this.powerSaving = boolean
    }

    reset() {
        this.temperature = 20
    }

}

module.exports = Thermostat