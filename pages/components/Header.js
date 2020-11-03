import React from 'react'
import '../static/styles/components/header.styl'
import {Row,Col,Menu} from 'antd'
import {
  HomeOutlined,
  VideoCameraOutlined,
  SmileOutlined
} from '@ant-design/icons';
const Header=(props)=>{
     return (
          <div className="header">
              <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">夏婷婷</span>
                    <span className="header-txt">专注淘宝购物，一天购买一千件</span>
                </Col>
                <Col xs={24} sm={24} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal">
                        <Menu.Item key="home">
                            <HomeOutlined />
                            首页
                        </Menu.Item>
                        <Menu.Item key="video">
                            <VideoCameraOutlined />
                            视频
                        </Menu.Item>
                        <Menu.Item key="life">
                            <SmileOutlined />
                            生活
                        </Menu.Item>

                        
                    </Menu>
                </Col>
              </Row>
          </div>
      );
}
export default Header