import "./summary.scss";

const Summary = () => {
  return (
    <div className="summary-container">
      <h3 className="title">Summary</h3>
      <div className="summary-data">
        <section className="services">
          <h4 className="sub-title">Services</h4>
          <p className="service">Lavado de pelo</p>
          <p className="service">Corte de pelo</p>
          <p className="service">Corte de barba</p>
        </section>
        <section className="date-data">
          <h4 className="sub-title">Appointment Data*</h4>
          <span className="date-title">
            Day: <p className="date">28/04/2021</p>
          </span>
          <span className="hour">
            Hour: <p>10:00HS</p>
          </span>
          <span className="date-warn">
            <p>
              *A contact number will be provided upon confirmation of your
              reservation.
            </p>

            <p>
              Please remember to confirm your attendance beforehand, preferably
              24 hours previous to the arranged date, otherwise the appointment
              will be cancelled.
            </p>
          </span>
        </section>
        <section className="comment-box">
          <h4 className="sub-title">Additional note (Optional)</h4>
          <textarea
            id="text"
            name=""
            rows="4"
            placeholder="Additional note"
            res
          ></textarea>
        </section>
        {/*
     <section className="confirm-data">
           <button class="button-58">Reserve!</button>
        </section>
 */}
        <section className="login-register">
          <button className="login-btn btn">Login</button>
          <button className="register-btn btn">Register</button>
        </section>
      </div>
    </div>
  );
};

export default Summary;