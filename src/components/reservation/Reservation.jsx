import "./reservation.scss";

const Reservation = () => {
  return (
    <div className="card">
      <div className="top-card">
        <h3>27/03/2022</h3>
        <hr />
      </div>
      <div class="center-card">
        <ul>
          <li>
            <i class="fas fa-chevron-right"></i> Corte de pelo
          </li>
          <li>
            <i class="fas fa-chevron-right"></i> Corte de barba
          </li>
          <li>
            <i class="fas fa-chevron-right"></i> Lavado de cabeza
          </li>
        </ul>
      </div>
      <div class="footer-card">
        <button>CANCELL DATE</button>
      </div>
    </div>
  );
};

export default Reservation;
