import DateBuilder from "./DateBuilder";
import styles from "./ResultBox.module.css";

const ResultBox = ({ cityDetails }) => {
  return (
    <>
      <div className={styles.locationBox}>
        <div className={styles.location}>
          {cityDetails.name}, {cityDetails.sys.country}
        </div>
        <div className={styles.date}>
          {<DateBuilder newDate={new Date()} />}
        </div>
      </div>
      <div className={styles.weatherBox}>
        <div className={styles.temp}>{cityDetails.main.temp} °C</div>
        <div className={styles.weather}>
          {cityDetails.weather[0].description}
        </div>
      </div>
    </>
  );
};

export default ResultBox;
