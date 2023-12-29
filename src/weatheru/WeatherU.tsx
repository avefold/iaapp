import { useEffect, useState } from 'react'

export function WeatherU() {
  const [latitude, setLatitude] = useState<any>('')
  const [longitude, setLongitude] = useState<any>('')
  const [dataTemp, setDataTemp] = useState<any>('')
  const [dataCode, setDataCode] = useState<any>('')
  const [dataCity, setDataCity] = useState<any>('')
  const [dataCountry, setDataCountry] = useState<any>('')
  useEffect(() => {
    async function fetchData() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
        })
      if (longitude === "") { return false }
      await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`)
        .then(res => res.json())
        .then(res => (setDataTemp(res.current.temperature_2m), setDataCode(JSON.stringify(res.current.weather_code))))
      await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
        .then(res => res.json())
        .then(res => (setDataCity(res.city), setDataCountry(res.countryName)))
    }
    fetchData()
  }, [longitude, latitude])

  return <>
    {dataTemp && dataTemp + '\u00B0 C'}
    <br />
    {dataCode &&
      dataCode == 0 ? 'Clear sky' :
      dataCode == 1 ? 'Mainly clear' :
        dataCode == 2 ? 'Partly cloudy' :
          dataCode == 3 ? 'Overcast' :
            dataCode == 45 ? 'Fog' :
              dataCode == 48 ? 'Depositing rime fog' :
                dataCode == 51 ? 'Drizzle light' :
                  dataCode == 53 ? 'Drizzle moderate' :
                    dataCode == 55 ? 'Drizzle dense' :
                      dataCode == 56 ? 'Freezing drizzle light' :
                        dataCode == 57 ? 'Freezing drizzle dense' :
                          dataCode == 61 ? 'Rain light' :
                            dataCode == 63 ? 'Rain moderate' :
                              dataCode == 65 ? 'Rain heavy' :
                                dataCode == 66 ? 'Freezing rain light' :
                                  dataCode == 67 ? 'Freezing rain heavy' :
                                    dataCode == 71 ? 'Snow fall light' :
                                      dataCode == 73 ? 'Snow fall moderate' :
                                        dataCode == 75 ? 'Snow fall heavy' :
                                          dataCode == 77 ? 'Snow grains' :
                                            dataCode == 80 ? 'Rain showers light' :
                                              dataCode == 81 ? 'Rain showers moderate' :
                                                dataCode == 82 ? 'Rain showers violent' :
                                                  dataCode == 85 ? 'Snow showers light' :
                                                    dataCode == 86 ? 'Snow showers heavy' :
                                                      dataCode == 95 ? 'Thunderstorm light / moderate' :
                                                        dataCode == 96 ? 'Thunderstorm + light hail' :
                                                          dataCode == 99 ? 'Thunderstorm + heavy hail' :
                                                            null}
    <br />
    {dataCity.replaceAll('"', '')}
    <br />
    {dataCountry.replaceAll('"', '')}
  </>
}