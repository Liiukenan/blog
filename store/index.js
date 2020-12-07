import Axios from 'axios';
import { createModel } from 'hox';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Router from 'next/router'
function store() {
    const [listData, setListData] = useState([]);
    const [id,setId]=useState([]);
    const handleClickId=(i)=>setId(i)
    return {
      listData,
      handleClickId,
      id
    };
  }
  
  export default createModel(store)