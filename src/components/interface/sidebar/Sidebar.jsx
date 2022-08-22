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
        <p className="title">List</p>
        <li>
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
          <BarChartOutlinedIcon />
          <span>Stats</span>
        </li>
        <p className="title">Data observe</p>
        <li>
          <NotificationsNoneOutlinedIcon />
          <span>Notification</span>
        </li>
        <li>
          <HeartBrokenOutlinedIcon />
          <span>System health</span>
        </li>
        <li>
          <BiotechOutlinedIcon />
          <span>Log</span>
        </li>
        <p className="title">User</p>
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
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
