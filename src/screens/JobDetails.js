import React, { useState, useEffect } from "react";
import { useLocation, useHistory, useParams } from "react-router-dom";

// Load the full build.
var _ = require("lodash");

const JobDetails = (props) => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  React.useEffect(() => {
    findById();
  }, []);

  const findById = () => {
    console.log("props.data.jobs", props.data.jobs);
    const match = props.data.jobs.find((item) => item.id == id);
    console.log("match", match);
    setItem(match);
  };

  return (
    <div>
      {" "}
      {_.isEmpty(item) ? (
        <h2>Job detail for {id} doesn't exist </h2>
      ) : (
        <article>
          <h2>{item.title}</h2>
          <h3>
            {item.position} in {item.city}
          </h3>
        </article>
      )}
    </div>
  );
};

export default JobDetails;
