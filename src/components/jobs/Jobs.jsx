import "./jobs.scss";
import AvailableJob from "../availableJob/AvailableJob";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { SummaryContext } from "../../context/summaryContext/SummaryContext";
import { changeServices } from "../../context/summaryContext/SummaryActions.js";

const Jobs = () => {
  const { dispatch } = useContext(SummaryContext);
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSelect = (e) => {
    selectedItems.includes(e.target.value)
      ? setSelectedItems(
          selectedItems.filter((item) => item !== e.target.value)
        )
      : setSelectedItems([...selectedItems, e.target.value]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/jobs");
      setData(res.data);
      setLoading(false);
    };
    fetchData();
  }, [data]);

  useEffect(() => {
    dispatch(changeServices(selectedItems));
  }, [selectedItems, dispatch]);

  return (
    <div className="jobs-container">
      <h4 className="title">Available Services</h4>
      {loading ? (
        <div className="lds-ring spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className="available-jobs">
          {data?.map((job) => (
            <AvailableJob
              key={job.title}
              title={job.title}
              desc={job.desc}
              handleSelect={handleSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobs;
