import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HeartBrokenOutlinedIcon from "@mui/icons-material/HeartBrokenOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">admin span</span>
      </div>
      <hr />
      <ul className="center">
        <p className="title">main</p>
        <li>
          <DashboardIcon />
          <span>Dashboard</span>
        </li>
        <li>
          <p className="title">List</p>
          <PeopleAltOutlinedIcon />
          <span>Users</span>
        </li>
        <li>
          <PrecisionManufacturingOutlinedIcon />
          <span>Product</span>
        </li>
        <li>
          <QrCode2OutlinedIcon />
          <span>Orders</span>
        </li>
        <p className="title">Service</p>
        <li>
          <p className="title">Data observe</p>
          <BarChartOutlinedIcon />
          <span>Stats</span>
        </li>
        <li>
          <NotificationsNoneOutlinedIcon />
          <span>Notification</span>
        </li>
        <li>
          <HeartBrokenOutlinedIcon />
          <span>System health</span>
        </li>
        <li>
          <p className="title">User</p>
          <BiotechOutlinedIcon />
          <span>Log</span>
        </li>
        <li>
          <SettingsOutlinedIcon />
          <span>Setting</span>
        </li>
        <li>
          <AccountBoxOutlinedIcon />
          <span>Profile</span>
        </li>
        <li>
          <LogoutOutlinedIcon />
          <span>Logout</span>
        </li>
      </ul>
      <div className="buttom">color options</div>
    </div>
  );
};

export default Sidebar;
