import { Layout, Menu } from 'antd';
import {Row,Col} from 'antd';
import { Avatar } from 'antd';
import { Input, Space } from 'antd';

import { MailOutlined , BellOutlined} from '@ant-design/icons';

const { Header} = Layout;
const { Search } = Input;
const onSearch = (value: string) => console.log(value);


function MainHeader(){
    return(
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} >
          <Row>
              <Col span={12}><Search allowClear  style={{ width: 370, height:48, margin:17 }} placeholder="Search..." onSearch={onSearch}  /></Col>
              <Col span={9}></Col>
              <Col span={3}  >
                <MailOutlined style={{ fontSize: 20 , padding:5}} /> 
                <BellOutlined style={{ fontSize: 20, padding:12}}  /> 
                <Avatar size={40} src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/278858444_502628194846639_1246819765598551041_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=we9biJAwISQAX9INxoi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AT8Edjx5J867udPdzjb1b0BzzLDBWDs5pXIEK2aMYV-gMw&oe=62D02AC5"  />
              </Col>
          </Row>
        </Header>
    )
} export default MainHeader;