import {
  Button,
  Drawer,
  Form,
  Input,
  InputNumber,
  Radio,
  Switch,
  Table,
  Watermark,
} from "antd";
import React, { useContext, useEffect, useState } from "react";
import { ReportContext } from "../Helper/ReportValues";
import { CloseCircleOutlined, CloseOutlined, MoreOutlined } from "@ant-design/icons";

const ReportTable = () => {
  const { navitem, jsonData, columns, setcolumns } = useContext(ReportContext);
  const [open, setOpen] = useState(false);
  const [drawercolumn, setdrawercolumn] = useState({});
  const [drawerForm] = Form.useForm();
  const showDrawer = (item) => {
    console.log(item);
    setdrawercolumn(item);
    drawerForm.setFieldsValue({
      key:item.key,
      title: item.title,
      width: item.width || 2,
      textalign: item.textalign || "left",
      sort: item.sort || false,
      Total: item.total || false,
    });
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  let i = 0;
  const makeColumnobj = (key) => {
    const data = { key, title: key, dataIndex: key };
    if (i++ >= 5) {
      data.hidden = true;
    }
    setcolumns((prev) => [...prev, data]);
  };
  const getobj = () => {
    setcolumns([]);
    const data = jsonData ? jsonData[0] : null;
    data && Object.keys(data).forEach((element) => makeColumnobj(element));
  };
  const countcolumn = () => {
    let i = 0;
    columns.forEach((item) => {
      if (!item.hidden) {
        i++;
      }
    });
    if (i === 0) {
      return false;
    } else {
      return true;
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    const {title,textalign,width,Total,sort}=values;
    setcolumns(columns.map((column=>{
      if(column.key==values.key)
      {
        return {...column,title,textalign,width,Total,sort};
      }else
      {
        return column

      }
    })))
    onClose()
  };
  useEffect(() => {
    getobj();
  }, [jsonData]);
  let tablcolumns = columns.map((item) => {
    return {
      ...item,
      title: (
        <span style={{ display: "flex", justifyContent: "space-between" }}>
          {item.title} <MoreOutlined onClick={() => showDrawer(item)} />
        </span>
      ),
      render: text => <div style={{textAlign:item.textalign ||'left', }}>{text}</div>,
      width:item.width*10 ||'auto',
      
    };
  });
  return (
    <div key={jsonData} style={{ width: "100%", overflow: "auto" }}>
      <Watermark content={navitem.label} font={{ fontSize: 30 }}>
        <Table
          bordered
          key={jsonData}
          columns={tablcolumns}
          className="table"
          pagination={false}
          dataSource={countcolumn() && jsonData}
        />
      </Watermark>

      <Drawer
        title={<div style={{display:'flex',flexDirection:"column",marginLeft:0}} ><label>Edit Column</label><small>{drawercolumn.title}</small></div>}
        onClose={onClose}
        headerStyle={{textAlign:"left",padding:5,width:"100%",paddingLeft:0,margin:"0 auto"}}
        open={open}
        style={{padding:0}}
        closeIcon={<CloseOutlined  onclick={()=>onClose()} style={{ fontSize:20,position:"absolute",padding:10,right:10,top:10 }}/>}
      >
        <Form
          form={drawerForm}
          name="basic"
          style={{
            maxWidth: "100%",
            margin:0
          }}
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >
           <Form.Item
            label="Column key"
            name="key"
            hidden="true"
            rules={[
              {
                required: true,
                message: "Please input column Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Column Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input column Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Column Width"
            name="width"
            rules={[
              {
                required: true,
                message: "Please input column Name!",
              },
            ]}
          >
            <InputNumber min={1} max={5} style={{ width: "50%" }} />
          </Form.Item>
          <Form.Item label="Text Align" name="textalign">
            <Radio.Group defaultValue={drawercolumn.textalign || "left"}>
              <Radio value={"left"}>LEFT</Radio>
              <Radio value={"center"}>CENTER</Radio>
              <Radio value={"right"}>RIGHT</Radio>
            </Radio.Group>
          </Form.Item>
          <label htmlFor="sort">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              Set Default Sorting
              <Form.Item
                valuePropName="checked"
                wrapperCol={{ span: 24 }}
                labelCol={{ span: 0 }}
                label="Set Default Sorting"
                name="sort"
              >
                <Switch id="sort" />
              </Form.Item>
            </div>
          </label>
          <label htmlFor="total">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              Total
              <Form.Item
                name="Total"
                valuePropName="checked"
                htmlFor="total"
                wrapperCol={{ span: 24 }}
                labelCol={{ span: 0 }}
                label="Total"
              >
                <Switch id="total" />
              </Form.Item>
            </div>
          </label>
          <div style={{width:"100%",position:"absolute",bottom:0}}>

            <hr/>
          <Form.Item style={{width:"90%",display:'flex',justifyContent:'flex-end'}} wrapperCol={{span:24}}>
            <Button onClick={()=>onClose()} style={{marginRight:10}}>cancel</Button>
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
          </div>
        </Form>
      </Drawer>
    </div>
  );
};

export default ReportTable;
