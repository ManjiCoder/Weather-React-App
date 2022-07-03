import React, { useEffect, useState } from "react";
import Img from "../Img/Cloudy.png";
import Sunrise from "../Img/sunrise.png";
import Sunset from "../Img/sunset.png";
import Search from "../Img/search.png";
import Location from "../Img/location.png";

function Wheather() {
  const [search, setSearch] = useState("mumbai");
  const [query, setQuery] = useState("");
  const [unit, setUnit] = useState("metric");
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [wind, setWind] = useState(null);
  const [date, setDate] = useState(null);
  const [sunriseTime, setSunriseTime] = useState(null);
  const [sunsetTime, setSunsetTime] = useState(null);
  const [status, setStatus] = useState(null);
  const [temp, setTemp] = useState(9);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const fetchApi = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c412e32f8374f6a87ce341d095a159f6&units=${unit}`;
    let data = await fetch(url);
    let res = await data.json();
    setStatus(res.cod);
    console.log(url);
    console.log(res);
    setCity(res.name);
    setTemp(res.main.temp);
    setCountry(res.sys.country);
    setDescription(res.weather[0].description);
    setDate(String(new Date(res.dt)));
    setWind(res.wind.speed);
    setHumidity(res.main.humidity);
    setPressure(res.main.pressure);
    setSunriseTime(String(new Date(res.sys.sunrise).toLocaleString()));
    setSunsetTime(String(new Date(res.sys.sunset).toLocaleString()));
    console.log(url);
  };
  const handleSearch = () => {
    setSearch(query);
    console.log(query);
  };
  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line
  }, [search, unit, city]);
  function GetLocation() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      setLatitude(Math.round((crd.latitude + Number.EPSILON) * 100) / 100);
      setLongitude(Math.round((crd.longitude + Number.EPSILON) * 100) / 100);
      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    console.log("works");
    console.log(latitude, longitude);
    navigator.geolocation.getCurrentPosition(success, error, options);
  }
  return (
    <div className="pb-20 flex flex-wrap justify-center  bg-cyan-500 text-white">
      <main className="px-3 py-4 mt-20 border-2  bg-cyan-600 rounded-md">
        <h1 className="my-4 text-2xl text-center">Wheather</h1>
        <h1 className="my-4 text-xl text-center">
          {city}, {country}
        </h1>
        <h2 className="my-4 text text-center">{date}</h2>
        <form
          className="px-4 py-2 border-2 flex flex-wrap bg-cyan-700 space-x-3 rounded-lg items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="border-solid pl-4 py-1 border-2 border-cyan-400 rounded-lg text-black focus:outline-none focus:ring focus:ring-cyan-500 focus-within:border-transparent"
            type="text"
            id="text"
            name="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* To get Location */}
          <button className="hover:scale-125" onClick={handleSearch}>
            <img className="h-5 invert" src={Search} alt="" />
          </button>
          <button className="hover:cursor-pointer" onClick={GetLocation}>
            <img className="h-7 invert" src={Location} alt="" />
          </button>
          <button className="text-3xl" onClick={() => setUnit("metric")}>
            °C
          </button>
          <span className="text-3xl mb-2">|</span>
          <button className="text-3xl" onClick={() => setUnit("kelvin")}>
            °F
          </button>
          {/* <div>
            Latitude: {latitude} Longitude: {longitude}
          </div> */}
        </form>
        {/* {status===200?console.log('city'):console.log('no city')} */}
        {status === 200 ? (
          <>
            <div className="py-7 capitalize flex flex-wrap px-2 items-center justify-around">
              <div className="text-center">
                <img className="h-16" src={Img} alt="" />
                <span>{description}</span>
              </div>
              <div className="text-5xl">
                {temp.toFixed()}°{unit === "metric" ? "C" : "F"}
              </div>
              <div className="flex flex-wrap flex-col text-left">
                <span>wind: {wind} Kmph </span>
                <span>Pressure: {pressure} mb</span>
                <span>Humitidy: {humidity} </span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between p-3">
              <div className="flex flex-wrap flex-col items-center">
                <img className="w-16" src={Sunrise} alt="" />
                <span>Sunrise</span>
                <span>{sunriseTime}</span>
              </div>
              <div className="flex flex-wrap flex-col items-center">
                <img className="w-16" src={Sunset} alt="" />
                <span>Sunset</span>
                <span>{sunsetTime}</span>
              </div>
            </div>
          </>
        ) : (
          <div className="mx-8 mt-2">No City Found</div>
        )}
      </main>
    </div>
  );
}

export default Wheather;