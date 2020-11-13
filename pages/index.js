import React,{useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from './components/Header'
import Author from './components/Author'
import Advert from './components/Advert'
import Footer from './components/Footer'
import {Row,Col,Menu,List} from 'antd'
import axios from 'axios'
import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined
} from '@ant-design/icons';
const Home=(list)=>{
  const [ mylist , setMylist ] = useState(list.data.data)
  console.log(mylist);
  return (
    <div>
      <Head>
        <title>夏婷婷的blog</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14} >
          <List header={<div>最新日志</div>} itemLayout="vertical" dataSource={mylist} renderItem={
            item=>(
              <List.Item>
                <div className="list-title">
                  <Link href={{pathname:'details',query:{id:item.id}}}>
                     <a>
                       {item.title}
                     </a>
                  </Link>
                </div>
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
                <div className="list-context">
                  {item.articleContent}
                </div>
              </List.Item>
            )
          }/>
        </Col>
         <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4} >
          <Author />
          <Advert />
        </Col>

      </Row>
      <Footer />
    </div>
  )
}


Home.getInitialProps = async (ctx) => {
    const res=await axios.get('http://127.0.0.1:7001/default/getArticleList')
    return {
        data:res.data
    }
}
export default Home