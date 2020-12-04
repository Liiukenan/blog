import React, { useEffect, useState } from 'react'
import '../pages/static/styles/components/header.styl'
import { Row, Col, Menu } from 'antd'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/servicePath'

// import {
//   HomeOutlined,
//   VideoCameraOutlined,
//   SmileOutlined
// } from '@ant-design/icons'

import * as Icon from '@ant-design/icons';
const Header = (props) => {
  const [navArray, setNavArray] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then((res) => {
        return res.data
      })
      setNavArray(result)
    }
    fetchData()
  }, [])
  //   []只有第一次进入组件执行

  const handleClick = (e) => {
    if (e.key == 0) {
      Router.push('/')
    } else {
      Router.push('/list?id=' + e.key)
    }
  }
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">夏婷婷</span>
          <span className="header-txt">专注淘宝购物，一天购买一千件</span>
        </Col>
        <Col xs={24} sm={24} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="0">
                {
                    React.createElement(
                        Icon["HomeOutlined"]
                    )
                }
                首页
            </Menu.Item>
            {navArray.map((item) => {
              return (
                  <Menu.Item key={item.id}>
                    {
                        React.createElement(
                            Icon[item.icon]
                        )
                    }
                    {item.typeName}
                  </Menu.Item>
              )
            })}
          </Menu>
        </Col>
      </Row>
    </div>
  )
}
export default Header