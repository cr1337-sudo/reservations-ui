import "./reservations.scss";
import Reservation from "../../components/reservation/Reservation";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";

const Reservations = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchReservations = async () => {
      const res = await axios.get(`/sessions?email=${user.email}`);
      setData(res.data);
    };
    fetchReservations();
  }, [user]);

  return (
    <>
      <div className="reservations-container">
        <div className="top-title">
          <h2>RESERVATIONS</h2>
        </div>
        <div className="mid-reservations">
          {data?.map((res) => (
            <Reservation data={res} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Reservations;
