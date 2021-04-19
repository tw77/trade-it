import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import "./DropDownMenu.css";

export default function DropDownMenu2() {
  const history = useHistory();

  function toProfile() {
    history.push(`/profile`)
  }

  const userMenu = (
  <Router>

    <Menu >
      <Menu.Item onClick={toProfile} key="1">
        <span>My profile</span>
      </Menu.Item>
      <Menu.Divider />
        <Menu.Item key="3">
        <Link to="/logout"></Link>
        <span>Logout</span>
          </Menu.Item>
      </Menu>
    </Router>
  );
  return (
    <div>
      <Dropdown.Button
        className="dropdown-btn"
        icon={
          <AccountCircleIcon
            style={{
              fontSize: '45px',
            }}
          />
        }
        overlay={userMenu}
      ></Dropdown.Button>
    </div>
  );
};

