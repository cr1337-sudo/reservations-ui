import "./availableJob.scss";
import { useContext } from "react";
import {SummaryContext} from "../../context/summaryContext/SummaryContext"

const AvailableJob = ({ title, desc }) => {
  const {services} = useContext(SummaryContext)


  return (
    <article className="job">
      <input type="checkbox" value={title} />
      <span>
        {title}
        <p className="desc">{desc}</p>
      </span>
    </article>
  );
};

export default AvailableJob;
