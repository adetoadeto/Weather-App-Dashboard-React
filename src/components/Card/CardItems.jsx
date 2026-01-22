const CardItems = ({ title, value, label, icon, ...props }) => {
  return (
    <div>
      <div className="heading">
        <p className="top-label">{title}</p>
        <i className={`fa-solid fa-${icon}`} {...props}></i>
      </div>
      <h3>{value}</h3>
      <p className="bottom-label">{label}</p>
    </div>
  );
};

export default CardItems;
