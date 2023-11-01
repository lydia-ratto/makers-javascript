const WeatherClient = require('./weatherClient')

class Weather {

    load(city) {
        const client = new WeatherClient()
        return client.fetchWeatherData(city).then((data) => {return data})
    }

}

module.exports = Weather