import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [city, setCity] = useState('')
  const [data, setData] = useState('')
  const apikey = "f2c553b6bf124bbf510ca75f8f0cb730";

  const getWeather = async () => {
    const res = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    );
    const data = res.data;
    setData(data)
  };
  useEffect(() => {
    try {
      getWeather()
    } catch (error) {
      console.log(error);
    }
  },[city]);

  return (
    <div>
      <Header />
      <Search setCity={setCity} setData={setData}/>
      {data !== '' && <Card data={data}/>}
    </div>
  );
}

export default App;
