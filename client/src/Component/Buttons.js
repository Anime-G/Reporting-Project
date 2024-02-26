import { CopyOutlined, EditOutlined, EyeOutlined, HistoryOutlined, ReloadOutlined, SaveOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useContext } from "react";
import { ReportContext } from "../Helper/ReportValues";

const Buttons = () => {
  const { navitem, customize, setCustomize,columns,setcolumns,tempcolumns, settempcolumns } = useContext(ReportContext);
    
  return (
    <div style={{ gap: 5, display: "flex", padding: 10 }}>
      {customize ? (
        <>
          <Button type="primary" danger icon={<ReloadOutlined rotate={-210}  style={{transform: "rotate(90deg) scaleX(-1)"}} />} onClick={() => {setcolumns(tempcolumns);setCustomize(false)}}>Cancel</Button>
          <Button type="primary" icon={<EyeOutlined />} onClick={() => {setcolumns(tempcolumns); setCustomize(false)}}>View Report</Button>
          <Button  type="primary" style={{background:"mediumseagreen"}} icon={<SaveOutlined />} onClick={() => { setCustomize(false)}}>
            Save
          </Button>{" "}
        </>
      ) : (
        <>
          <Button icon={<HistoryOutlined />}>History</Button>
          <Button icon={<CopyOutlined />}>Duplicate</Button>
          <Button icon={<EditOutlined />} onClick={() => { settempcolumns(columns);  setCustomize(true)}}>
            Customize
          </Button>
        </>
      )}
    </div>
  );
};

export default Buttons;
