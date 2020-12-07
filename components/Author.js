import React from 'react'
import {Avatar,Divider} from 'antd'
import '../static/styles/components/avator.styl'
import {
  GithubOutlined,
  QqOutlined,
  WechatOutlined
} from '@ant-design/icons';
const Author=(props)=>{
     return (
          <div className="author-div comm-box ">
            <div> 
            <Avatar size={100} src="../images/baby.jpg"/>
            </div>
            <div className="author-introduction">
                关注前沿web技术，记录生活点滴
                <Divider>社交账号</Divider>
                <GithubOutlined style={{fontSize:'28px'}}/>
                <QqOutlined  style={{fontSize:'28px',marginLeft:'10px'}}/>
                <WechatOutlined  style={{fontSize:'28px',marginLeft:'10px'}}/>

            </div>
        </div>
      );
}
export default Author