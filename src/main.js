let html = document.querySelector('#html');
let style = document.querySelector('#style')
let string = `/*你好，我是一名前端新人
接下来我要演示我的前端功底
首先 我要准备一个div*/   
#div1{
    width:200px;
    height:200px;
}
/*吧div变成一个八卦图
注意看好了首先把div1变成一个圆圈·*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
一黑一白*/
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*加上八卦的两个中心*/
#div1::before {
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`;
// css gradient background generator网址调混合色

let string2 = ''
//js里面的回车会自动变为空格
// string = string.replace('\n','<br>') 这种写法只会把第一个\n回车变为<br>回车
// string = string.replace(/\n/g,'<br>')这种方法有个弊端<br>回车是四个字符串并且在执行过程中会出现<来短暂表示执行时的回车
// let n = -1;
let n = 0;
// demo.innerHTML = string.substring(0,n); 为了改进string = string.replace(/\n/g,'<br>')的弊端
let step = ()=>{
    setTimeout(()=>{
    // n = n+1;
    // if可以简化string2+=(string[n]===\n?<br>:string[n])
    if (string[n]==='\n'){
        string2+='<br>'  // string2=string2+'<br>'可以使用简写
    }else if(
        string[n]===' '){
            string2+='&nbsp'   // 空格要表示为&nbsp
        }else
    {
        string2+=string[n] // string2=string2+string[n]
    }
    html.innerHTML = string2;
     style.innerHTML = string.substring(0,n); //css中不能出现html标签的string2会将空格 回车变为<br> &nbsp
     window.scrollTo(0,9999) //自动滚动用户窗口
     html.scrollTo(0,9999)
    if(n<string.length-1){n+=1 // 一个54个字符串，但是下标是从0开始的[n]应该到53就结束了，但是当到53的时候53<string.length，此时还会进行一次循环，会循环出undefined，所以应该改为string.length-1
        step();
    }
    
},10)};

step();
