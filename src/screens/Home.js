import React from "react";
// import Blog from "../components/Blog";
import Image from "material-ui-image";
import Container from "@material-ui/core/Container";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "400vh" }}>
      <Box
        sx={{
          width: 500,
          height: 500
        }}
      >
        {
          <Image src="https://tb9-images.s3.amazonaws.com/online-job-searching-vector.jpg" />
        }
        <a href="https://www.vecteezy.com/free-vector/web">
          Web Vectors by Vecteezy
        </a>
      </Box>
    </div>
  );
};

export default Home;
