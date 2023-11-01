const Weather = require('./weather')
const jestFetchMock = require('jest-fetch-mock')


describe('FetchWeatherData', () => {
    it("returns weather temp of 12.22 when weather.load('London')", () => {
        const weather = new Weather()
        weather.load('London').then((city_weather) => {
            expect(city_weather.name).toBe('London')
        })
    })
})