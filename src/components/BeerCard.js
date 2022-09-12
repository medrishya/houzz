import { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { capitalize_first_letter } from "../util";

export const BeerCard = ({ item }) => {
  const tooltip = ({ ingredients }) => (
    <Tooltip id="button-tooltip">
      Ingredients :{" "}
      {ingredients &&
        Object.keys(ingredients) &&
        Object.keys(ingredients).length &&
        Object.keys(ingredients).map((item, index) => (
          <span key={index}>
            {capitalize_first_letter(item)}
            {index == Object.keys(ingredients).length - 1 ? "" : ", "}{" "}
          </span>
        ))}
    </Tooltip>
  );
  return (
    <div className="beer-card">
      <div className="image-holder">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={tooltip({
            ingredients: item && item.ingredients,
          })}
        >
          <div
            style={{
              backgroundImage: "url(" + item.image_url + ")",
            }}
            className="image-keeper"
          ></div>
        </OverlayTrigger>
      </div>
      <div>
        <h3 className="title-text">{item.name}</h3>
        <h6 className="sub-title-text">{item.tagline}</h6>
        <div>
          {" "}
          <ReadMore>{item.description}</ReadMore>
        </div>
      </div>
    </div>
  );
};

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div>
      {isReadMore ? text.slice(0, 150) : text}
      {text.length > 150 && (
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? " ... " : ""}
        </span>
      )}
    </div>
  );
};
