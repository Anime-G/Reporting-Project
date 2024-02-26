import { Menu, Input } from "antd";
import React, { useContext } from "react";
import {
  HomeOutlined,
  LineChartOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import Item from "antd/es/list/Item";
import { ReportContext } from "../Helper/ReportValues";

const SideBar = () => {
  const {navitem,setNav}=useContext(ReportContext);
  const { Search } = Input;
  const onClick = (e) => {
    // console.log("click ", e);
  };
  function getItem(label, key, icon, children, type,onclick=false) {
    const obj={
      key,
      icon,
      children,
      label,
      type,
    };

    if(onclick)
    {
      obj.onClick=()=>setNav({key,label})
    }
    return obj;
  }
  const reportItems = [
    getItem(
      "Reservation Reports",
      "reservation_reports.json",
      null,
      [
        getItem("Arrival List", "arrival_list.json", null, null, null,true),
        getItem(
          "Cancelled Reservation",
          "cancelled_reservation.json",
          null,
          null,
          null,true
        ),
        getItem(
          "Country Wise Reservation Statistics",
          "country_wise_reservation",
          null,
          null,
          null,true
        ),
      ],
      null
    ),
  ];
  return (
    <div className="slidebar">
      <h4> Report Insights</h4>
      <Menu
        
        className="w-100 border border-0"
        onClick={onClick}
        style={{
          width: "100%",
          background: "none",
          border: "none",
        }}
        mode="vertical"
      >
        <Menu.Item key="/" name="Home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.SubMenu  title="Templates" icon={<LineChartOutlined />}>
          <Search placeholder="" enterButton style={{ padding: 10 }} />
          <Menu  mode="inline" onClick={onClick} items={reportItems} />
        </Menu.SubMenu>
        <Menu.Item
          key="custome_reports"
          icon={<SaveOutlined />}
          name="Custome Reports"
        >
          Custome Reports
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideBar;
