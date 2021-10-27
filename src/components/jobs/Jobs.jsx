import "./jobs.scss";
import AvailableJob from "../availableJob/AvailableJob";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Jobs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/jobs");
      setData(res.data);
    };
    fetchData();
  }, [data]);

  return (
    <div className="jobs-container">
      <h4 className="title">Available Services</h4>
      <div className="available-jobs">
        {data.map((job) => (
          <AvailableJob title={job.title} desc={job.desc} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
