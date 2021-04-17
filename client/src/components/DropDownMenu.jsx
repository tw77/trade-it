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
    history.push(`/profile/2`)
  }

  const userMenu = (
  <Router>

    <Menu style={{backgroundColor: '#E0E0E0', }}>
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
        style={{backgroundColor: '#E0E0E0'}}
        className="dropdown-btn"
        
        icon={
          <AccountCircleIcon
            style={{
              fontSize: '45px',
              paddingBottom: '10px',
              backgroundColor: '#E0E0E0',
            }}
          />
        }
        overlay={userMenu}
      ></Dropdown.Button>
    </div>
  );
};

