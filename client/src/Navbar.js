import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link to="/" className="navbar-brand">DJ Music</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>

            <li className="nav-item">
              <Link to="/events" className="nav-link">Events</Link>
            </li>

            <li className="nav-item">
              <Link to="/user" className="nav-link">Users</Link>
            </li>

            <li className="nav-item">
              <Link to="/music" className="nav-link">Music</Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;