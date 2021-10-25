import "./availableJob.scss";

const AvailableJob = ({ title, desc }) => {
  return (
    <article className="job">
      <input type="checkbox" />
      <span>
        {title}
        <p className="desc">{desc}</p>
      </span>
    </article>
  );
};

export default AvailableJob;
