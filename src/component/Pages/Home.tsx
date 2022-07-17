import { DoanhThuChart, GoiGiaDinhPieChart, GoiSuKienPieChart } from "./component/DoanhThuChart"

import { DatePicker, Space } from 'antd';
import { Row, Col } from 'antd';
import moment from 'moment';

const monthFormat = 'MM/YYYY';

export const Home = () => {
    return (
        <div>
            <h1 style={{ fontSize: 36 }}>Thống kê</h1>
            <div className="doanhThuContainer" style={{ marginBottom: 50 }} >
                <h4>Doanh Thu</h4>
                <Space direction="horizontal" id="dateContainer" style={{ width: '100%', justifyContent: 'flex-end' }} >
                    <Space direction="vertical" size={12}>
                        <DatePicker defaultValue={moment('07/2022', monthFormat)} format={monthFormat} picker="month" />
                    </Space>
                </Space>
                <div id="LineChart" ><DoanhThuChart /></div>
                <div className="res" style={{ margin: 22 }}>
                    <h4>Tổng doanh thu theo tuần</h4>
                    <b style={{ fontSize: '30px' }}>525.145.000</b> đồng
                </div>


            </div>

            <div className="goiVeContainer">
                <Row>
                    <Col span={4}>
                        <Space direction="horizontal" id="dateContainer" style={{ width: '100%', justifyContent: 'flex-start', marginLeft: 20 }} >
                            <Space direction="vertical" size={12}>
                                <DatePicker defaultValue={moment('07/2022', monthFormat)} format={monthFormat} picker="month" />
                            </Space>
                        </Space>
                    </Col>
                    <Col span={5} style={{ marginLeft: 40, marginRight:50 }} >
                        <h5 style={{ textAlign: 'center' }}>Gói gia đình</h5>
                        <div className="familyPieContainer">
                            <GoiGiaDinhPieChart />
                            <div className="number-desc" id='desc1'> 56024</div>
                            <div className="number-desc" id='desc2'> 13568</div>
                            
                        </div>
                    </Col>
                    <Col span={5} style={{ marginLeft: 50 }}>
                        <h5 style={{ textAlign: 'center' }}>Gói sự kiện</h5>
                        <div className="eventPieContainer">
                            <GoiSuKienPieChart />
                            <div className="number-desc" id='desc3'>30256</div>
                            <div className="number-desc" id='desc4'>28302</div>
                        </div>

                    </Col>
                    <Col span={7}>
                        <div className="ticketDesc" style={{ margin: 50, marginLeft: 100 }}>
                            <div className="desc">
                                <div className="descColor" id="used"></div> <h5>Vé đã sử dụng</h5>
                            </div>
                            <div className="desc">
                                <div className="descColor" id="unUsed"></div> <h5>Vé chưa sử dụng</h5>
                            </div>

                        </div>
                    </Col>
                </Row>

            </div>
        </div>

    )
}