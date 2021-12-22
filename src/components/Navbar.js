import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Thrivex - Job Search</h1>
      <div className="links">
        <Link to="/">Home</Link>
        {/* <Link to="/Create">Create</Link> */}
        <Link to="/jobs">Jobs</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
