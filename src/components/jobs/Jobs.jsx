import "./jobs.scss";
import AvailableJob from "../availableJob/AvailableJob";

const Jobs = () => {
  return (
    <div className="jobs-container">
      <h4 className="title">Available Services</h4>
      <div className="available-jobs">
        <AvailableJob title={"Re-styles"} desc="First service" />
        <AvailableJob title={"Color"} desc="Change your hair color" />
      </div>
    </div>
  );
};

export default Jobs;
