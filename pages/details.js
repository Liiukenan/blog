import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/styles/components/details.css'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai.css'
import Router from 'next/router'
import utils from '../lib/utils'
// import MarkNav from "markdown-navbar";
import axios from 'axios'
// import "markdown-navbar/dist/navbar.css";
import { withRouter } from 'next/router'
import Tocify from '../components/tocify.tsx'
import servicePath from '../config/servicePath'
import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined
} from '@ant-design/icons'
import { context } from '../store'
const Details = (props) => {
  const tocify = new Tocify()
  const renderer = new marked.Renderer()
  const detailsData=props.data[0];
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix">${text}<h${level}></a>\n`
  }
  let store = useState({})
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
  let html = marked(props.data[0].articleContent) 

  return (
    <context.Provider value={store}>
    <div>
      <Head>
        <title>{detailsData.title}</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{detailsData.typeName}</Breadcrumb.Item>
                <Breadcrumb.Item>{detailsData.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div>
              <div className="detailed-title">{detailsData.title}</div>
              <div className="list-icon center">
                <span className="mr-8">
                  <CalendarOutlined/>
                  <i className="ml-2">{detailsData.addTime}</i>
                </span>
                <span className="mr-8">
                  <FolderOpenOutlined />
                  <i className="ml-2">{detailsData.typeName}</i>
                </span>
                <span className="mr-8">
                  <FireOutlined />
                  <i className="ml-2">{detailsData.viewCount}</i>
                </span>
              </div>

              <div
                className="detailed-content"
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
            </div>
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          {/* <Advert /> */}
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              {tocify && tocify.render()}
              
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
    </context.Provider>
  )
}
export async function getServerSideProps({query}) {
  const res=await axios.get(servicePath.getArticleById+query.id);
  return { props: { data:res.data} }
}
export default withRouter(Details)
