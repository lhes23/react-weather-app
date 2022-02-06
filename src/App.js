import Input from "./components/Input";
import Cards from "./components/Cards";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import DateBuilder from "./components/DateBuilder";

const api = {
  id: "524901",
  key: "2369a19e7a5aa3277c29230b40cce396",
  base: "http://api.openweathermap.org/data/2.5/",
};

function App() {
  const [city, setCity] = useState("");
  const [cityDetails, setCityDetails] = useState(null);

  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    fetch(`${api.base}/weather?q=${city}&units=metric&APPID=${api.key}`)
      .then((response) => response.json())
      .then((result) => setCityDetails(result));
  };

  useEffect(() => {
    console.log(cityDetails);
  }, [cityDetails]);

  return (
    <Container>
      <Row>
        <Col>
          <Cards
            title="Weather Forecast App"
            temp={cityDetails && cityDetails.main.temp}
          >
            <Input
              setCity={setCity}
              onSubmitFormHandler={onSubmitFormHandler}
            />
            {cityDetails && (
              <>
                <div className="location-box">
                  <div className="location">
                    {cityDetails.name}, {cityDetails.sys.country}
                  </div>
                  <div className="date">
                    {<DateBuilder newDate={new Date()} />}
                  </div>
                </div>
                <div className="weather-box">
                  <div className="temp">{cityDetails.main.temp} °C</div>
                  <div className="weather">
                    {cityDetails.weather[0].description}
                  </div>
                </div>
              </>
            )}
          </Cards>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
