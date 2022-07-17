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
        <Menu.Item key="0"><Link className="nav-link" style={{}} to="/"><HomeOutlined /> Trang chủ</Link></Menu.Item>
        <Menu.Item key="1"><Link className="nav-link" style={{}} to="/quanly"><UserOutlined /> Quản lý vé</Link></Menu.Item>
        <Menu.Item key="2"><Link className="nav-link" style={{}} to="/doisoat"><HomeOutlined /> Đối soát vé</Link></Menu.Item>
        <Menu.Item key="3"><Link className="nav-link" style={{}} to="/"><UnorderedListOutlined /> Danh sách sự kiện</Link></Menu.Item>
        <Menu.Item key="4"><Link className="nav-link" style={{}} to="/"><DesktopOutlined /> Quản lý thiết bị</Link></Menu.Item>
        <Menu.Item key="5"> <Link className="nav-link" style={{}} to="/"><SettingOutlined /> Cài đặt</Link></Menu.Item>
        <Menu.SubMenu key={6} title="submenu">
          <Menu.Item key="7">item 3</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  )
} export default SideBar;