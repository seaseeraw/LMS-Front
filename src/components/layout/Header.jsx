import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import logo from "../../assets/lms-logo-wide.png";

import { FaHome } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import { HiOutlineLogin } from "react-icons/hi";
import { FaUserCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const isLoggedIn = false;
  return (
    <Navbar expand="md" variant="dark" className=" bg-dark">
      <Container>
        <Link to="/" className="nav-link">
          <img src={logo} alt="" width={"100px"} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              <FaHome /> Home
            </Link>

            {isLoggedIn ? (
              <>
                <Link to="/user/dashboard" className="nav-link">
                  <FaTachometerAlt /> Dashboard
                </Link>

                <Link to="#!" className="nav-link">
                  <IoLogOutSharp /> Log Out
                </Link>
              </>
            ) : (
              <>
                <Link to="/signup" className="nav-link">
                  <FaUserCog /> Sign UP
                </Link>
                <Link to="/login" className="nav-link">
                  <HiOutlineLogin /> Log In
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;