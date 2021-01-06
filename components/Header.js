import React, { useEffect, useState,useContext } from 'react'
import '../static/styles/components/header.css'
import { Row, Col, Menu } from 'antd'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/servicePath'
// import store from "../store";
import * as Icon from '@ant-design/icons'
import { context } from '../store'
const Header = (props) => {
  // const hoxData = store();
  const [navArray, setNavArray] = useState([])
  const setId = useContext(context)[1]
  useEffect(() => {
    axios(servicePath.getTypeInfo).then((res) => {
      setNavArray(res.data)
    })


    
  }, [])
  //   []只有第一次进入组件执行

  const handleClick =async (e) => {
    await setId(e.key)
    // await Router.push('/')
    // hoxData.handleClickId(e.key);
    Router.push('/?typeid=' + e.key)
  }
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12} className="flex-items-center">
          <span className="header-logo">
            <img src="./images/logo.jpg" alt=""/>
          </span>
          <span className="header-txt">记录生活点滴，记录web前端</span>
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