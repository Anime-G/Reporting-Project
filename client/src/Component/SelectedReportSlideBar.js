import React, { useContext } from "react";
import { ReportContext } from "../Helper/ReportValues";
import { Checkbox, Input, List, Menu } from "antd";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

const SelectedReportSlideBar = () => {
  const { navitem, jsonData,setCustomize, columns, setcolumns,tempcolumns, settempcolumns } = useContext(ReportContext);
  const handleCheckboxChange = (item, value) => {
    setcolumns(
      columns.map((column) => {
        if (column.key === item.key) {
          return { ...item, hidden: value };
        } else {
          return column;
        }
      }),
    );
  };
  const data = columns.map((column) => {
    return (<Menu.Item key={column.id} onClick={() => handleCheckboxChange(column, !column.hidden)} >
      
      <div style={{display:"flex"}} > <label>{column.title} </label>
      <div style={{position:"absolute",right:20}}><Checkbox checked={!column.hidden} /></div> </div>
      
      
    </Menu.Item>);
  });
  return (
    <div className="slidebar">
      <div className="selectedmenu">
      <label style={{padding:10}} onClick={()=>{setcolumns( tempcolumns);setCustomize(false)}}>
      <LeftOutlined /> Back
      </label>
      <Menu
      header={<><h5>Check Columns</h5><Input.Search enterButton allowClear placeholder="enter column name" /></>}
      mode="vertical"
      style={{height:"700px",overflow:"scroll"}}
      
    >
      <Menu.Item style={{width:"100%",height:"fit-content",color:"black",cursor:"default"}} disabled >
        <b>Report Column</b><br/>
        
        <Input.Search placeholder="search column" style={{width:"100%",}}/>
      </Menu.Item>
      {data}
    </Menu>  
        </div>

    </div>
  );
};

export default SelectedReportSlideBar;
