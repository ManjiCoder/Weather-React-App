import React, { useEffect, useState } from "react";

function Wheather() {
  const [search, setSearch] = useState("mumbai"); // TO GET SEARCH QUERY

  const [city, setCity] = useState(null);
  const [status, setStatus] = useState(0);
  const [temp, setTemp] = useState(9)
  // const [wheatherData, setWheatherData] = useState(
  // {
  //     "coord": { "lon": 72.8479, "lat": 19.0144 },
  //     "weather": [
  //       {
  //         "id": 802,
  //         "main": "Clouds",
  //         "description": "scattered clouds",
  //         "icon": "03d"
  //       }
  //     ],
  //     "base": "stations",
  //     "main": {
  //       "temp": 30.99,
  //       "feels_like": 37.99,
  //       "temp_min": 26.94,
  //       "temp_max": 30.99,
  //       "pressure": 1005,
  //       "humidity": 74
  //     },
  //     "visibility": 2500,
  //     "wind": { "speed": 6.69, "deg": 230, "gust": 11.83 },
  //     "clouds": { "all": 40 },
  //     "dt": 1655291476,
  //     "sys": {
  //       "type": 1,
  //       "id": 9052,
  //       "country": "IN",
  //       "sunrise": 1655253064,
  //       "sunset": 1655300825
  //     },
  //     "timezone": 19800,
  //     "id": 1275339,
  //     "name": "Mumbai",
  //     "cod": 200
  //   }

  // )
  /*
  console.log(wheatherData.weather[0].main)
  console.log(wheatherData.weather[0].id)
  console.log(wheatherData.weather[0].description)
  console.log(wheatherData.main.temp)
  console.log(wheatherData.main.feels_like)
  console.log(wheatherData.main.temp_min)
  console.log(wheatherData.main.temp_max)
  console.log(wheatherData.main.pressure)
  console.log(wheatherData.main.humidity)
*/

  const fetchApi = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c412e32f8374f6a87ce341d095a159f6&units=metric`;
    let data = await fetch(url);
    let res = await data.json();
    console.log(url);
    console.log(res);
    setCity(res.name);
    setTemp(res.main.temp);
    setStatus(Number(res.cod));
    console.log(status);
  };
  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line
  }, [search]);

  return (
    <>
      <div>Wheather</div>
      {!city ? <h3>No Data Found</h3> : <h3>{search} {temp} C</h3>}
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            id="text"
            name="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <button type="submit" onClick={() => fetchApi()}>
            Submit
          </button> */}
          {/* To get Location */}
          <button>Current Location</button>
        </form>
      </div>
    </>
  );
}

export default Wheather;
