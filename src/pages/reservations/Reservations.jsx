import "./reservations.scss";
import Reservation from "../../components/reservation/Reservation";

const Reservations = () => {
  return (
    <>
      <div className="reservations-container">
        <div className="top-title">
          <h1>Reservations</h1>
        </div>
        <div className="mid-reservations">
          <Reservation />
          <Reservation />
          <Reservation />
          <Reservation />
          <Reservation />
          <Reservation />
          <Reservation />
          <Reservation />
          <Reservation />
          <Reservation />
          <Reservation />
          <Reservation />
          <Reservation />
          <Reservation />
        </div>
      </div>
    </>
  );
};

export default Reservations;
