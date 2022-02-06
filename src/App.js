import Input from "./components/Input";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import ResultBox from "./components/ResultBox";
import "./App.css";

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
    <>
      <Container
        fluid
        className={cityDetails && cityDetails.main.temp >= 25 ? "warm" : "cold"}
      >
        <div id="overlay">
          <Row>
            <Col>
              <Input
                setCity={setCity}
                onSubmitFormHandler={onSubmitFormHandler}
              />
              {cityDetails && <ResultBox cityDetails={cityDetails} />}
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default App;
