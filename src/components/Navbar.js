import { Link } from "react-router-dom";
import Image from "material-ui-image";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="https://thrivedx.com/" role="link">
        <img
          width="168"
          height="30"
          src="https://thrivedx.com/wp-content/uploads/2021/10/TDX-NO-SLOGAN.png"
        />
      </a>
      <div className="links">
        <Link to="/">Home</Link>
        {/* <Link to="/Create">Create</Link> */}
        <Link to="/jobs">Jobs</Link>
        <Link to="/about">About</Link>
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#09B261",
          width: "100px",
          height: "50px",
          justifyContent: "center",
          alignItems: "center",
          color: "white"
        }}
      >
        {"Contact"}
      </div>
    </nav>
  );
};

export default Navbar;
