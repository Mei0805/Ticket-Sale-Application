import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { HomeOutlined, UnorderedListOutlined, DesktopOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

const { Sider, Footer } = Layout;



function SideBar() {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{}}

    >
      <div className="logo" style={{ padding: 25 }}> <img src="/img/logo.png" alt="" /> </div>

      <Menu style={{ margin: 15 }} >
        <Menu.Item><Link className="nav-link" style={{}} to="/"><HomeOutlined /> Trang chủ</Link></Menu.Item>
        <Menu.Item><Link className="nav-link" style={{}} to="/quanly"><UserOutlined /> Quản lý vé</Link></Menu.Item>
        <Menu.Item><Link className="nav-link" style={{}} to="/doisoat"><HomeOutlined /> Đối soát vé</Link></Menu.Item>
        <Menu.Item><Link className="nav-link" style={{}} to="/"><UnorderedListOutlined /> Danh sách sự kiện</Link></Menu.Item>
        <Menu.Item><Link className="nav-link" style={{}} to="/"><DesktopOutlined /> Quản lý thiết bị</Link></Menu.Item>
        <Menu.Item> <Link className="nav-link" style={{}} to="/"><SettingOutlined /> Cài đặt</Link></Menu.Item>
        <Menu.SubMenu title="submenu">
          <Menu.Item>item 3</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  )
} export default SideBar;