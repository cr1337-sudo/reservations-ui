import "./reservations.scss";
import Reservation from "../../components/reservation/Reservation";
import axios from "axios";
import {
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
  Box,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { ThemeContext } from "../../context/themeContext/ThemeContext";

const Reservations = () => {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchReservations = async () => {
      const res = await axios.get(`/sessions?email=${user.email}`);
      setData(res.data);
    };
    fetchReservations();
  }, [user]);

  const card = (
    <>
    <CardContent  >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          cancer
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </>
  );
  return (
    <>
      <div
        className={`reservations-container ${theme === "light" ? "light" : ""}`}
      >
        <div className="top-title">
          <h2>RESERVATIONS</h2>
        </div>

        <Box sx={{ display: "flex", width: "100%", border: "1px solid black" }}>
    <Card variant="outlined">
            {card}
          </Card>
          <Card variant="outlined">{card}</Card>
        </Box>
        <div className="mid-reservations">
          {data?.map((res) => (
            <Reservation data={res} />
          ))}
        </div>
      </div>{" "}
    </>
  );
};
export default Reservations;
