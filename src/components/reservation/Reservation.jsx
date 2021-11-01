import "./reservation.scss";

const Reservation = () => {
  return (
    <div className="card">
      <div className="top-card">
        <h3>27/03/2022</h3>
        <hr />
      </div>
      <div className="center-card">
        <ul>
          <li>
            <i className="fas fa-chevron-right"></i> Corte de pelo
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Corte de barba
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Lavado de cabeza
          </li>
        </ul>
      </div>
      <div className="footer-card">
        <button>CANCELL DATE</button>
      </div>
    </div>
  );
};

export default Reservation;
