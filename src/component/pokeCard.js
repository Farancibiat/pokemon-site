import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Card, Button, Carousel } from "react-bootstrap";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from "react-router-bootstrap";

export const PokeCard = (props) => {
  const { store, actions } = useContext(Context);
  const [pokesUpdated, setPokeUpdate] = useState(false);

  useEffect(() => {
    console.log(store.pokes[store.pokes.length - 1]['order']);
    if (store.pokes !== undefined) {
      if (store.pokes[store.pokes.length - 1]['order'])
        setPokeUpdate(true);
      else setPokeUpdate(false);
    } else setPokeUpdate(false);
  }, []);
  return (
    <>
      <Card className="me-4 ms-3 my-3 px-0" style={{ width: "18rem" }}>
        <Card.Header>
          {!pokesUpdated ? (
            <>Loading...</>
          ) : (
            <>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={store.pokes[props.pos]["sprites"]["front_default"]}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={store.pokes[props.pos]["sprites"]["back_default"]}
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
            </>
          )}
        </Card.Header>
        <Card.Body>
          <Card.Title>{store.pokes[props.pos].name}</Card.Title>
          <p className="card-text mb-0">
            Pokedex N°: {parseInt(props.pos) + 1}
          </p>

          <div className="row">
            <div className="col-12 col-sm-6 pe-3">
              {/* <LinkContainer to={`/character/${props.position}`}> */}
              <Button variant="outline-primary">Learn more!</Button>
              {/* </LinkContainer> */}
            </div>
            <div className="col-12 col-sm-6 pe-3 d-flex flex-row-reverse">
              <Button
                variant="outline-warning"
                onClick={() => actions.addFav("characters", props.pos)}
              >
                <FontAwesomeIcon icon={faHeart} />
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default PokeCard;
