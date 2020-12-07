import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import { Row, Col, Menu, List, Breadcrumb } from 'antd'
import servicePath from '../config/servicePath'
import axios from 'axios'
import Link from 'next/link'
import marked from 'marked'
import hljs from 'highlight.js'
import utils from '../static/js/utils'
import 'highlight.js/styles/monokai-sublime.css'
import '../static/styles/components/index.styl'
import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined
} from '@ant-design/icons'
function Lists() {
  const [mylist, setMylist] = useState(null)
  const renderer = new marked.Renderer()
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    }
  })
  useEffect(() => {
    const id = utils.getQueryVariable('id')
    axios.get(`${servicePath.getTypeList}${id}`).then((res) => {
      setMylist(res.data)
    })
  }, [])
  if(!mylist) return false;
    return (
      <div>
        <Head>
          <title>Goldaner的生活记录仪</title>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
          />
        </Head>
        <Header />
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{mylist[0].typeName}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={(item) => (
                <List.Item>
                  <div className="list-title">{item.title}</div>
                  <div className="list-icon">
                    <span>
                      <CalendarOutlined />
                      {item.addTime}
                    </span>
                    <span>
                      <FolderOpenOutlined />
                      {item.typeName}
                    </span>
                    <span>
                      <FireOutlined />
                      {item.viewCount}人
                    </span>
                  </div>
                  <div
                    className="list-context"
                    dangerouslySetInnerHTML={{
                      __html: marked(item.articleContent)
                    }}
                  ></div>
                </List.Item>
              )}
            />
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <Author />
            <Advert />
          </Col>
        </Row>
        <Footer />
      </div>
    )
}
export default Lists
