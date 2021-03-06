import React, { useEffect, useState,useContext } from 'react'
import '../static/styles/components/header.css'
import { Row, Col, Menu } from 'antd'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import Head from 'next/head'
import servicePath from '../config/servicePath'
// import store from "../store";
// import * as Icon from '@ant-design/icons'
import { context } from '../store'
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2314372_77uyq3ihffx.js',
});
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
  
  // selectedKeys={[props.history.location.pathname]}
  return (
    <div className="header">
      <Head>
      <meta name="keywords" content="前端 前端开发 web前端 程序员 程序猿 javascript typescript nextjs vue react mysql mongodb koa2 webpack 插件"/>
        <meta name="description" content="记录工作中遇到的一些问题以及学习到的前端一些新技术，还有生活中的酸甜苦辣。"/>
        <meta name="baidu-site-verification" content="code-frbB9UTz1K" />
      </Head>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12} className="flex-items-center">
          <span className="header-logo">
            <img src="./images/logo.jpg" alt=""/>
          </span>
          <span className="header-txt">记录生活点滴，记录web前端</span>
        </Col>
        <Col xs={24} sm={24} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="0" className="flex-items-center">
                {/* {
                    React.createElement(
                        Icon["HomeOutlined"]
                    )
                } */}
                <IconFont type="iconshouye2" style={{fontSize:"16px"}}/>
                首页
            </Menu.Item>
            {navArray.map((item) => {
              return (
                  <Menu.Item key={item.id}>
                    {/* {
                        React.createElement(
                            Icon[item.icon]
                        )
                    }
                    {item.typeName} */}
                    
                    <IconFont type={item.icon} style={{fontSize:"16px"}}/>
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








