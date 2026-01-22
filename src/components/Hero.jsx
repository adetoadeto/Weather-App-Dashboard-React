const Hero = ({ data }) => {
  const currentData = data.current;
  const currentLocation = data.location.name;
  const sunrise = data.forecast.forecastday[0].astro.sunrise;

  return (
    <main>
      <div className="left-content">
        <div>
          <p>Today</p>
          <img id="icon" src={currentData.condition.icon} alt="weather-icon" />
        </div>

        <p id="temperature-value">{currentData.temp_c}°C</p>

        <p className="location">
          <i className="fa-solid fa-location-dot"></i>
          <span>{currentLocation}</span>
        </p>
      </div>

      <div className="right-content">
        <p id="sunrise-time">{sunrise}</p>
        <p>Sunrise time</p>
      </div>
    </main>
  );
};

export default Hero;
