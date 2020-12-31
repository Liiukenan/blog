let arr=[
    {
        id:1,
        parentId:0,
        name:'河南',
        children:[
            {
                id:0,
                parendId:1,
                name:'郑州',
                children: [
                    {
                        id:0,
                        parendId:0,
                        name:'新郑',
                        children: [
                            {
                                id:0,
                                parendId: 0,
                                name:'孟庄镇'
                            },
                            {
                                id:1,
                                parendId: 0,
                                name:'孟庄镇'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id:1,
        parentId:0,
        name:'北京',
        children:[
            {
                id:0,
                parendId:0,
                name:'朝阳区',
                children: [
                    {
                        id:0,
                        parendId:0,
                        name:'百子湾',
                        children: [
                            {
                                id:0,
                                parendId: 0,
                                name:'石门新居'
                            },
                            {
                                id:0,
                                parendId: 0,
                                name:'沿海赛洛城'
                            }
                        ]
                    },
                    {
                        id:1,
                        parendId:0,
                        name:'百子湾',
                        children: [
                            {
                                id:0,
                                parendId: 0,
                                name:'大郊亭'
                            },
                            {
                                id:0,
                                parendId: 0,
                                name:'胖子龙虾'
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

// function getName(arr){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].children.length; j++) {
//             for (let k = 0; k < arr[i].children[j].children.length; k++) {
//                 console.log(arr[i].children[j].children[k]);
//                 console.log(1);
//             }
//         }
        
//     }
// }

function getName(arrObj,n) {
    if(arrObj){
     arrObj.forEach(item=>{
      if(n==item.id){
          return item.name
      }else{
          getName(item.children)
      }
      
     })
    }
    n++;
   }

let r=getName(arr,1)
console.log(r);
