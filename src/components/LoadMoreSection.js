import { CaretDownFill } from "react-bootstrap-icons";
export const LoadMoreSection = ({ call_api }) => {
  return (
    <div className="center-div">
      <button className="load-more-button" onClick={call_api}>
        Load More <CaretDownFill />
      </button>
    </div>
  );
};
