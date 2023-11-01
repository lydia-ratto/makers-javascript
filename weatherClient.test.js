const WeatherClient = require("./weatherClient");

describe('WeatherClient', () => {
    it("returns weather data for London when fetchWeatherData('London')", () => {
        const client = new WeatherClient()
        client.fetchWeatherData('London').then((weather_info) => {
            expect(weather_info.name).toBe('London')
        })
    })
})


