import React, { useContext, useEffect, useState } from "react";
import {withRouter} from 'next/router' 
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import { Row, Col, Menu, List } from "antd";
import axios from "axios";
import servicePath from "../config/servicePath";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import "../static/styles/components/index.css"
import utils from "../lib/utils"
import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined,
} from "@ant-design/icons";
import { context } from "../store";
const Home = (props) => {
  const renderer = new marked.Renderer();
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
  const [mylist, setMylist] = useState(null);
  let store = useState(0)
  const getData = (id) => {
    axios.get(`${servicePath.getTypeList}${id}`).then((res) => {
      let data=JSON.parse(JSON.stringify(res.data))
      setMylist(data)
    })
  }
  const getIndexData=()=>{
    axios.get(servicePath.getArticleList).then((res)=>{
      let data=JSON.parse(JSON.stringify(res.data))
      setMylist(data)
    })
  }
  useEffect(() => {
    if(props.data.query.typeid!=0){
      getData(utils.getQueryVariable('typeid'))
    }else{
      getIndexData()
    }
  },[props.data.query.typeid])
  function ListData() {
    if(mylist){
    return(
      <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={(item) => (
              <List.Item>
                <div className="list-title">
                  <Link  href={{pathname:"details",query:{id:item.id}}}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <i>
                    <CalendarOutlined />
                    {item.addTime}
                  </i>
                  <i>
                    <FolderOpenOutlined />
                    {item.typeName}
                  </i>
                  <i>
                    <FireOutlined />
                    {item.viewCount}
                  </i>
                </div>
                {/* <div className="list-context" dangerouslySetInnerHTML={{__html:marked(item.articleContent)}}></div> */}
              </List.Item>
            )}
          />
    )
  }else{
    return(
      <div>
      </div>
    )
  }
  }
  return (
    <context.Provider value={store}>
    <div>
      <Head>
        <title>Goldaner的个人博客</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <ListData />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          {/* <Advert /> */}
          
        </Col>
      </Row>
      <Footer />
    </div>
    </context.Provider>
  );
};
export async function getServerSideProps({query}) {
  // Fetch data from external API
  if(!query.typeid){
    query.typeid=0
  }
  const data = {
    query
  }

  // Pass data to the page via props
  return { props: { data } }
}
export default withRouter(Home); 
