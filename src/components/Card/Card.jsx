import CardItems from "./CardItems";

const Card = ({ data }) => {
  const currentData = data.current;
  const forecastDay = data.forecast.forecastday[0].day;

  const uv = currentData.uv;
  const humidity = currentData.humidity;
  const visibility = currentData.vis_km;

  return (
    <section className="weather-highlight">
      <h2>{currentData.condition.text}</h2>
      <div className="weather-highlight_items">
        <CardItems
          id="uv-index"
          icon="cloud-sun"
          title="UV Index"
          value={uv}
          label={
            uv <= 2
              ? "Low"
              : uv <= 7
              ? "Use a sunscreen"
              : "Stay at home"
          }
        />
        <CardItems
          id="wind"
          icon="wind"
          title="Wind Status"
          value={`${currentData.wind_kph} km/h`}
          label={currentData.wind_dir}
        />
        <CardItems
          id="humidity"
          icon="cloud-rain"
          title="Humidity"
          value={`${humidity}%`}
          label={
            humidity <= 30
              ? "Low"
              : humidity <= 60
              ? "Moderate"
              : humidity <= 70
              ? "High"
              : "Very High"
          }
        />
        <CardItems
          id="visibility"
          icon="eye"
          title="Visibility"
          value={`${visibility} km`}
          label={
            visibility <= 2
              ? "Poor"
              : visibility <= 10
              ? "Low"
              : visibility <= 30
              ? "Moderate"
              : "Clear"
          }
        />
        <CardItems
          id="rainfall"
          icon="cloud-sun-rain"
          title="Chances of Rainfall"
          value={`${forecastDay.daily_chance_of_rain}%`}
        />
        <CardItems
          id="snow"
          icon="snowflake"
          title="Chances of Snow"
          value={`${forecastDay.daily_chance_of_snow}%`}
        />
      </div>
    </section>
  );
};

export default Card;
