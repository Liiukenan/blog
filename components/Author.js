import React, { useEffect, useReducer } from 'react'
import {Avatar,Divider} from 'antd'
import Link from "next/link";
import '../static/styles/components/avator.css'
import '../static/styles/components/author.css'
import {
  GithubOutlined,
  QqOutlined,
  WechatOutlined
} from '@ant-design/icons';
const intialstate={
  src:'./images/github.png'
}
function reducer(state,action){
  switch (action.type) {
    case 0:
      return {src:'./images/github.png'};
    case 1:
      return {src:'./images/qq.jpeg'};
    case 2:
      return {src:'./images/wechat.jpeg'}
    default:
      return false;
  }
}
const Author=()=>{
  const [state,dispatch]=useReducer(reducer,intialstate);
  
  return (
          <div className="author-div comm-box ">
            <div> 
            <Avatar size={100} src="../images/baby.jpeg" />
            </div>
            <div className="author-introduction">
            生活要有目标，但我们不是为了目标而生活。
                <Divider>社交账号</Divider>
                <Link href="https://github.com/Liiukenan">
                  <GithubOutlined style={{fontSize:'28px'}} onMouseOver={()=>dispatch({type:0})}/>
                </Link>
                <Link  href="javascript:void(0)">
                  <QqOutlined  style={{fontSize:'28px',marginLeft:'10px'}} onMouseOver={()=>dispatch({type:1})}/>
                </Link>
                <Link href="javascript:void(0)">
                  <WechatOutlined  style={{fontSize:'28px',marginLeft:'10px'}} onMouseOver={()=>dispatch({type:2})}/>
                </Link>
            
            </div>
            <div className="linkimg">
              <img src={state.src} alt=""/>
            </div>
            
            
           
        </div>
      );
}
export default Author