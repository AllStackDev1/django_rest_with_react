import React from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Dropdown } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

import { logoutRequest } from "../../redux/auth/actions";

const Navbar = () => {
  const { isAuthenticated, user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const authLinks = (
    <Menu.Item position="right">
      <Dropdown
        item
        simple
        fluid
        text={`Welcome, ${user ? user.username : ""}`}
      >
        <Dropdown.Menu>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => dispatch(logoutRequest(token))}
            style={{ width: "100%" }}
          >
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );

  const guestLinks = (
    <Menu.Item position="right">
      <Link to="/login" className="ui inverted button">
        Login
      </Link>
      <Link
        to="/register"
        className="ui inverted button"
        style={{ marginLeft: "0.5em" }}
      >
        Regiser
      </Link>
    </Menu.Item>
  );

  return (
    <Menu fixed="top" inverted pointing={false} secondary={false} size="large">
      <Container>
        <Menu.Item header style={{ textTransform: "uppercase" }}>
          Lead Manager
        </Menu.Item>
        <Link to="/home" className="active item ">
          Home
        </Link>
        <Menu.Item as="a">Work</Menu.Item>
        {isAuthenticated ? authLinks : guestLinks}
      </Container>
    </Menu>
  );
};

export default Navbar;
