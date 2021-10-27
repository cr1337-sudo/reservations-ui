import { useContext } from "react";
import "./availableHours.scss";
import { SessionContext } from "../../context/sessionContext/SessionContext";

const AvailableHours = () => {
  const { hours, isFetching } = useContext(SessionContext);
  return (

    <div className="hours-container">
    {isFetching ? (
      

      <div class="lds-ring spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ):(
      <form action="">
        {hours[0]?.hours.map((session) => (
          <div
            key={session.hour}
            className={`inputGroup ${!session.available ? "nonAvailable" : ""}`}
          >
            <input
              id={session.hour}
              name="radio"
              disabled={!session.available}
              type="radio"
            />
            <label for={session.hour}>{session.hour}HS</label>
          </div>
        ))}
      </form>

    )}
    </div>
  );
};

export default AvailableHours;
