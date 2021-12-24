import React, { useState, useEffect } from "react";
import { useLocation, useHistory, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Load the full build.
var _ = require("lodash");

const JobDetails = (props) => {
  const { id } = useParams();

  const [item, setItem] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    findById();
  }, []);

  const findById = () => {
    var url = "https://server.bots-inc.com/apis/getJobs";

    const abortCont = new AbortController();

    setTimeout(() => {
      console.log("getJobs at url", url);
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            console.log("Error fetching");
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          console.log("result data", data);
          setIsPending(false);

          const match = data.find((item) => item.id == id);
          console.log("match", match);
          setItem(match);

          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            // auto catches network / connection error
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {item && (
        <Card sx={{ display: "inline-block", maxWidth: 500 }}>
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              textAlign="left"
            >
              {item.title}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign="left"
            >
              {item.location}
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="left">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Apply</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default JobDetails;
