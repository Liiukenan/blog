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
            <Avatar size={100} src="./images/baby.jpg"/>
            </div>
            <div className="author-introduction">
                夏婷婷，专注于赚钱与花钱。立誓要一月花掉一千万的国际前沿时尚女性。
                <Divider>社交账号</Divider>
                <GithubOutlined style={{fontSize:'28px'}}/>
                <QqOutlined  style={{fontSize:'28px',marginLeft:'10px'}}/>
                <WechatOutlined  style={{fontSize:'28px',marginLeft:'10px'}}/>

            </div>
        </div>
      );
}
export default Author