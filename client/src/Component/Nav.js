import { Drawer, Menu } from 'antd';
import React, { useState } from 'react'
import { AppstoreOutlined, BarsOutlined, CloseOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
const Nav = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const items = [
    {
      style:{onClick:"none"},
      onClick:()=>open===false?showDrawer():onClose(),
      icon:open===false?<BarsOutlined  />:<CloseOutlined />
    },
    {
      label: 'Navigation Two',
      key: 'app',
      icon: <AppstoreOutlined />,
     
    }
  ];
  const [current, setCurrent] = useState('app');
  const onClick = (e) => {
    // console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div style={{display:"flex",flexDirection:"column"}} >
      
      <Menu theme='dark' style={{height:45}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <Drawer
        title="Basic Drawer"
        placement="left"
        closable={false}
        onClose={onClose} 
        open={open}
        style={{marginTop:45,padding:"5px"}}
        width={"20%"}

        // Add className to apply custom styles
        className="custom-drawer"
        mask={false} // Remove mask
        headerStyle={{display:"none"}} // Remove header
      >
       
      </Drawer>
      
    </div>
  )
}

export default Nav
