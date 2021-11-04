import "./reservation.scss";

const Reservation = ({ data }) => {
  const { year, month, day, hour, jobs } = data;
  return (
    <div className="card">
      <div className="top-card">
    <h3>{`${day}/${month}/${year} - ${hour}HS`}</h3>
        <hr />
      </div>
      <div className="center-card">
        <ul>
          {jobs?.map((job) => (
            <li>
              <i className="fas fa-chevron-right"></i> {job}
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-card">
        <button>CANCELL DATE</button>
      </div>
    </div>
  );
};

export default Reservation;
