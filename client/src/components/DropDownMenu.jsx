import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import "./DropDownMenu.css";

export default function DropDownMenu2() {
  const userMenu = (
  <Router>

    <Menu style={{backgroundColor: '#E0E0E0', }}>
      <Menu.Item key="1">
        <Link to="/profile"></Link>
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
              fontSize: '40px',
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

