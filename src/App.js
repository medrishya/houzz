import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { BeerCard, LoadMoreSection } from "./components";
import { API_URL } from "./constants";

const App = () => {
  const [page, set_page] = useState(0); // For pagination
  const [beers, set_beers] = useState(null); // For retrieving the beer records
  const [loading, set_loading] = useState(true); // For loading

  const call_api = async () => {
    try {
      set_loading(true);
      await axios.get(API_URL(page)).then(function (response) {
        const { data } = response;
        if (beers && beers.length > 0) {
          let z = [...beers, ...data];
          set_beers(z);
          set_page(page + 1);
        } else {
          set_beers(data);
          set_page(page + 1);
        }
      });
    } catch (err) {
    } finally {
      set_loading(false);
    }
  };

  useEffect(() => {
    call_api();
  }, []);

  return (
    <div className="App">
      <Container>
        <h2 className="beer-header">Beers</h2>
        <Row>
          {beers &&
            beers.length &&
            beers.map((item, index) => (
              <Col
                key={index}
                lg={6}
                md={12}
                sm={12}
                className="card-container"
              >
                <BeerCard item={item} />
              </Col>
            ))}
        </Row>

        {loading && <div>Loading ...</div>}
        {beers && beers.length && <LoadMoreSection call_api={call_api} />}
      </Container>
    </div>
  );
};

export default App;
