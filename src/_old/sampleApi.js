import { useLocation, useParams } from "react-router-dom";

// https://github.com/sindresorhus/query-string
const queryString = require("query-string");

const filterJobs = () => {
  const parameters = queryString.parse(location.search);
  var location = "";
  var title = "";

  "location" in parameters
    ? (city = parameters["location"])
    : console.log("no location key");
  "title" in parameters
    ? (position = parameters["title"])
    : console.log("no title key");

  console.log(parameters);

  const filteredJob = props.data.jobs.filter((item) => {
    if (location.length > 0 && title.length > 0) {
      console.log(city, position);
      return item.location === location && item.title === title;
    } else if (location.length > 0) {
      return item.location.match(location);
    } else if (title.length > 0) {
      return item.position.match(title);
    } else {
      return true;
    }
  });

  console.log(filteredJob);
};
