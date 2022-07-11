import { DoanhThuChart, GoiGiaDinhPieChart } from "./component/DoanhThuChart"

import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { Row, Col } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;
const monthFormat = 'MM/YYYY';

export const Home = () => {
    return (
        <div>
            <h1 style={{ fontSize: 36 }}>Thống kê</h1>
            <div className="doanhThuContainer"  style={{ marginBottom: 50}} >
                <h4>Doanh Thu</h4>
                <Space direction="horizontal" id="dateContainer" style={{ width: '100%', justifyContent: 'flex-end' }} >
                    <Space direction="vertical" size={12}>
                        <DatePicker defaultValue={moment('07/2022', monthFormat)} format={monthFormat} picker="month" />
                    </Space>
                </Space>
                <div id="LineChart" ><DoanhThuChart /></div>
            </div>

            <div className="goiVeContainer">
                <Row>
                    <Col span={6}>
                        <Space direction="horizontal" id="dateContainer" style={{ width: '100%', justifyContent: 'flex-start' }} >
                            <Space direction="vertical" size={12}>
                                <DatePicker defaultValue={moment('07/2022', monthFormat)} format={monthFormat} picker="month" />
                            </Space>
                        </Space>
                    </Col>
                    <Col span={6}>
                        <h5 style={{textAlign: 'center' }}>Gói gia đình</h5>
                        <GoiGiaDinhPieChart />
                    </Col>
                    <Col span={6}>

                    </Col>
                    <Col span={6}>

                    </Col>
                </Row>

            </div>
        </div>

    )
}