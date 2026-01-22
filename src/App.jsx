import axios from "axios";
import { useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Card from "./components/Card/Card";
import Forecast from "./components/Forecast/Forecast";
import Gallery from "./components/Gallery/Gallery";

const App = () => {
  const [data, setData] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleFetchData = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const URL = "https://weatherapi-com.p.rapidapi.com/forecast.json";
    const API_KEY = import.meta.env.VITE_RAPID_API_KEY;

    const options = {
      method: "GET",
      url: URL,
      params: {
        q: userInput,
        days: "3",
      },
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const body = response.data;
      setData(body);
      setIsLoading(false);
      console.log(body);
    } catch (error) {
      console.log(error);
    }
  };

  const loadingMessage = <p id="delay-text">Data loading, please wait</p>;

  return (
    <>
      <Nav
        handleFetchData={handleFetchData}
        handleUserInput={handleUserInput}
      />
      {isLoading && loadingMessage}
      {data.length === 0 && <Gallery />}
      {data.length !== 0 && (
        <>
          <Hero data={data} />
          <Card data={data} />
          <Forecast data={data} />
        </>
      )}
    </>
  );
};

export default App;
