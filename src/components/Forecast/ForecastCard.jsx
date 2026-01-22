const ForecastCard = ({ date, icon, text }) => {
  // const formattedDate = new Date(date).toLocaleString("en-us", {
  //   weekday: "long",
  // });
  return (
    <li>
      <p>{date}</p>
      <img src={icon} alt="weather icon" />
      <p>{text}</p>
    </li>
  );
};

export default ForecastCard;
