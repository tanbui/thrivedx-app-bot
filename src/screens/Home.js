import React from "react";
// import Blog from "../components/Blog";
import Image from "material-ui-image";
import Container from "@material-ui/core/Container";
import Box from "@mui/material/Box";
import useFetch from "../Api/useFetch";

const Home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "400vh"
        }}
      >
        <div style={{ width: "100%" }}>
          <Box
            sx={{
              fontSize: 32,
              fontFamily: "Arial",
              textAlign: "left",
              display: "flex",
              p: 1,
              m: 1,
              bgcolor: "background.paper"
            }}
          >
            {"Thrive with Digital Skills"}
          </Box>
          <Box
            sx={{
              fontSize: 32,
              fontFamily: "Arial",
              textAlign: "left",
              display: "flex",
              p: 1,
              m: 1,
              bgcolor: "background.paper"
            }}
          >
            {"Training and EdTech Solutions"}
          </Box>
        </div>
        <img
          width="800"
          height="400"
          src="https://thrivedx.com/wp-content/uploads/2021/10/AdobeStock_146025373-1.png"
          class="attachment-full size-full"
          alt=""
          loading="lazy"
          srcset="https://thrivedx.com/wp-content/uploads/2021/10/AdobeStock_146025373-1.png 1320w, https://thrivedx.com/wp-content/uploads/2021/10/AdobeStock_146025373-1-300x173.png 300w, https://thrivedx.com/wp-content/uploads/2021/10/AdobeStock_146025373-1-1024x591.png 1024w, https://thrivedx.com/wp-content/uploads/2021/10/AdobeStock_146025373-1-768x443.png 768w"
          sizes="(max-width: 1320px) 100vw, 1320px"
        />
      </div>
    </div>
  );
};

export default Home;
