import ForecastCard from "./ForecastCard";

const Forecast = ({ data }) => {
  const forecastData = data.forecast.forecastday;

  return (
    <section className="forecast">
      <h4>This Week (3 days forecast including today)</h4>
      <ul className="forecast-data">
        {forecastData.map((item) => (
          <ForecastCard
            key={item.date}
            date={item.date}
            icon={item.day.condition.icon}
            text={item.day.condition.text}
          />
        ))}
      </ul>
    </section>
  );
};

export default Forecast;
