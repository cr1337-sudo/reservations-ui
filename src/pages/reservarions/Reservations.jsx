import "./reservations.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Reservation from "../../components/reservation/Reservation";

const Reservations = () => {
  return (
    <>
      <Sidebar />
      <div class="reservations-container">
        <div class="top-title">
          <h1>Reservations</h1>
        </div>
        <div class="mid-reservations">
          <Reservation />
        </div>
      </div>
    </>
  );
};

export default Reservations;