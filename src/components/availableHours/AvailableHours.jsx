import "./availableHours.scss";
import { SessionContext } from "../../context/sessionContext/SessionContext";
import { useContext, useEffect, useState } from "react";
import { SummaryContext } from "../../context/summaryContext/SummaryContext";
import { changeHour } from "../../context/summaryContext/SummaryActions.js";

const AvailableHours = () => {
  const { hours, isFetching } = useContext(SessionContext);
  const { dispatch } = useContext(SummaryContext);
  const [hour, setHour] = useState("");

  useEffect(() => {
    dispatch(changeHour(hour));
  }, [hour]);

  return (
    <div className="hours-container">
      {isFetching ? (
        <div class="lds-ring spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <form action="">
          {hours[0]?.hours.map((session) => (
            <div
              key={session.hour}
              className={`inputGroup ${
                !session.available ? "nonAvailable" : ""
              }`}
            >
              <input
                id={session.hour}
                name="radio"
                disabled={!session.available}
                type="radio"
                value={session.hour}
                onChange={() => setHour(session.hour)}
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
