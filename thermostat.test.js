const Thermostat = require('./thermostat')

describe('Thermostat', () => {
    it('returns temperature = 20 when new Thermostat constructed', () => {
        const thermostat = new Thermostat()
        expect(thermostat.getTemperature()).toBe(20)
    })
})

describe('Thermostat', () => {
    it('returns powerSaving = true when new Thermostat constructed', () => {
        const thermostat = new Thermostat()
        expect(thermostat.powerSaving).toBe(true)
    })
})

describe('Thermostat', () => {
    it('returns temperature = 22 when thermostat.up() called twice', () => {
        const thermostat = new Thermostat()
        thermostat.up()
        thermostat.up()
        expect(thermostat.getTemperature()).toBe(22)
    })
})

describe('Thermostat', () => {
    it('returns temperature = 25 when thermostat.up() called, temperature = 25 and powerSaving = true', () => {
        const thermostat = new Thermostat()
        thermostat.temperature = 25
        thermostat.up()
        expect(thermostat.getTemperature()).toBe(25)
    })
})

describe('Thermostat', () => {
    it('returns temperature = 26 when thermostat.up() called, temperature = 25 and powerSaving = false', () => {
        const thermostat = new Thermostat()
        thermostat.temperature = 25
        thermostat.setPowerSavingMode(false)
        thermostat.up()
        expect(thermostat.getTemperature()).toBe(26)
    })
})

describe('Thermostat', () => {
    it('returns temperature = 32 when thermostat.up() called, temperature = 32 and powerSaving = false', () => {
        const thermostat = new Thermostat()
        thermostat.temperature = 32
        thermostat.setPowerSavingMode(false)
        thermostat.up()
        expect(thermostat.getTemperature()).toBe(32)
    })
})

describe('Thermostat', () => {
    it('returns temperature = 18 when thermostat.down() called twice', () => {
        const thermostat = new Thermostat()
        thermostat.down()
        thermostat.down()
        expect(thermostat.getTemperature()).toBe(18)
    })
})

describe('Thermostat', () => {
    it('returns temperature = 10 when thermostat.down() called and temperature = 10', () => {
        const thermostat = new Thermostat()
        thermostat.temperature = 10
        thermostat.down()
        expect(thermostat.getTemperature()).toBe(10)
    })
})

describe('Thermostat', () => {
    it('returns temperature = 20 when thermostat.reset() called', () => {
        const thermostat = new Thermostat()
        thermostat.temperature = 10
        thermostat.reset()
        expect(thermostat.getTemperature()).toBe(20)
    })
})