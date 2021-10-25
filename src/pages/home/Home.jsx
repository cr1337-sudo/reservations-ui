import AvailableHours from "../../components/availableHours/AvailableHours";
import Calendar from "../../components/calendar/Calendar";
import Jobs from "../../components/jobs/Jobs";
import Summary from "../../components/summary/Summary";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = () => {

  return (
    <>
    // <Sidebar/>
    <div className="main-container">
      <div className="left-container">
        <Jobs />
      </div>
      <div className="center-container">
          <Calendar />
        <AvailableHours />
      </div>
      <div className="right-container">
        <Summary />
      </div>
    </div>
    </>
  );
};

export default Home;
