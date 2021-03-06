import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { DataGrid } from "@mui/x-data-grid";
// Load the full build.
var _ = require("lodash");

// https://github.com/sindresorhus/query-string
const queryString = require("query-string");

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "title",
    headerName: "Title",
    width: 200,
    editable: true
  },
  {
    field: "location",
    headerName: "location",
    width: 150,
    editable: true
  },
  // {
  //   field: "company",
  //   headerName: "Company",
  //   width: 200,
  //   editable: true
  // },
  {
    field: "description",
    headerName: "Description",
    width: 500,
    editable: true
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default
  },
  content: {
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  }
}));

const Jobs = (props) => {
  const [jobs, setJobs] = useState([]);

  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const classes = useStyles();
  const location = useLocation();

  console.log("path", location.pathname);

  React.useEffect(() => {
    getJobs();
  }, []);

  const getJobs = () => {
    const parameters = queryString.parse(location.search);
    var city = "";
    var title = "";

    "location" in parameters
      ? (city = parameters["location"])
      : console.log("no location key");
    "title" in parameters
      ? (title = parameters["title"])
      : console.log("no title key");

    console.log(parameters);
    var url = "https://server.bots-inc.com/apis/getJobs";

    if (!_.isEmpty(parameters)) {
      url = `https://server.bots-inc.com/apis/getJobs?title=${title}&location=${city}`;
      // https://server.bots-inc.com/apis/getJobs?title=Cyber%20Security&location=San%20Francisco
    }

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
          setJobs(data);
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
    <div className={classes.root}>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {jobs && (
        <Paper className={classes.content}>
          <div style={{ height: 650, width: "100%" }}>
            <DataGrid rows={jobs} columns={columns} pageSize={10} />
          </div>
        </Paper>
      )}
    </div>
  );
};

export default Jobs;
