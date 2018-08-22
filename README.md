# byteconter
一个用来计算字符串字节数的工具函数，使用场景比如 在http请求中拿到返回消息体后计算消息体字节大小。

## Install

        $ npm install byteconter -S

## Usage
可见项目example/test.js
        
    let byteCount = require('byteconter');
    console.log(byteCount('Hello 世界～！')); //    

## LICENSE
ISC