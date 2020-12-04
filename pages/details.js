import React,{useEffect, useState} from "react";
import Head from "next/head";
import { Row, Col, Breadcrumb, Affix } from "antd";
import Header from "../components/Header";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import Author from "../components/Author";
import "./static/styles/components/details.styl";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai.css";
// import MarkNav from "markdown-navbar";
import axios from "axios";
// import "markdown-navbar/dist/navbar.css";
import Tocify from "../components/tocify.tsx";
import servicePath from "../config/servicePath";
import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined,
} from "@ant-design/icons";
const Details = (detailsData) => {
  const renderer = new marked.Renderer();
  const tocify = new Tocify();
  // const [detailsData,setDatilsData]=useState({});
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix">${text}<h${level}></a>\n`;
  };
  useEffect(() => {
    // setDatilsData()
    // console.log(props)
  }, []);
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
      return hljs.highlightAuto(code).value;
    },
  });
  // datailsData?detailsData:{};
  let html = marked(detailsData.data.articleContent);
  return (
    <div>
      <Head>
        <title>博客详细页</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页 </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div>
              <div className="detailed-title">{detailsData.data.title}</div>
              <div className="list-icon center">
                <span>
                  <CalendarOutlined />
                  {detailsData.data.addTime}
                </span>
                <span>
                  <FolderOpenOutlined />
                  {detailsData.data.typeName}
                </span>
                <span>
                  <FireOutlined />
                  {detailsData.data.viewCount}
                </span>
              </div>

              <div
                className="detailed-content"
                dangerouslySetInnerHTML={{ __html: html }}
              >
             
              </div>
            </div>
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
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
  );
};

Details.getInitialProps = async (ctx) => {
  let id = ctx.query.id;
  const res = await axios.get(servicePath.getArticleById + id);
  return {
    data:res.data[0]
  }
};




export default Details;
