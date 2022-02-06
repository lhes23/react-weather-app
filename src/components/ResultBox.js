import DateBuilder from "./DateBuilder";

const ResultBox = ({ cityDetails }) => {
  return (
    <>
      <div className="location-box">
        <div className="location">
          {cityDetails.name}, {cityDetails.sys.country}
        </div>
        <div className="date">{<DateBuilder newDate={new Date()} />}</div>
      </div>
      <div className="weather-box">
        <div className="temp">{cityDetails.main.temp} °C</div>
        <div className="weather">{cityDetails.weather[0].description}</div>
      </div>
      ;
    </>
  );
};

export default ResultBox;
