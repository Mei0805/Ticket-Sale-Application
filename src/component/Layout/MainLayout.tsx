import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import MainHeader from './Header';
import SideBar from './SideBar';

import { Home } from '../Pages/Home';
import { DoiSoatVe } from '../Pages/DoiSoatVe';
import { GoiDichVu } from '../Pages/GoiDichvu';
import { QuanLyVe } from '../Pages/QuanLyVe';

import './style.css'
import 'antd/dist/antd.css';

import { Layout, Menu } from 'antd';
const { Content, Footer } = Layout;

function MainLayout() {
    return (
        <Layout>
            <SideBar />
            <Layout id='mainLayout'>
                <MainHeader />
                <Content style={{height:963}}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/doisoat' element={<DoiSoatVe />} />
                        <Route path='/dichvu' element={<GoiDichVu />} />
                        <Route path='/quanly' element={<QuanLyVe />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
}

export default MainLayout;
