/*
 util.promisify 方法
 */

// 引入 util 模块
const  util=require('util')

//引入fs模块
const fs=require('fs')

//返回一个新的函数【将原来使用回调函数的风格转换成 返回一个Promise 对象的形式】，使用起来更加方便
let mineReadFile=util.promisify(fs.readFile);

mineReadFile('./resource/content.txt').then(value => {
    console.log(value.toString())
},reason => {
    console.log(reason)
})
