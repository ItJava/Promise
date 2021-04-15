// 案例，要求读取resource  文件夹下的content.txt 内容
const  fs=require('fs')
/*
fs.readFile('./resource/content.txt',(err,data)=>{
    //如果出错  则抛出错误
    if(err) throw  err

    //输出文件内容
    console.log(data.toString())
})*/

// 下面通过Promis 来实现

let p=new Promise((resolve,reject)=>{

    fs.readFile("./resource/content.txt",(err,data)=>{
        //如果出错
        if(err) reject(err);
        //如果成功
        resolve(data)
    });
});

//调用then
p.then((value)=>{
    console.log(value.toString())
},(reason)=>{
    console.log(reason)
})


