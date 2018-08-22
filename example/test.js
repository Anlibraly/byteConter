const byteCount = require('../index');
const str = 'Hello! 这是一个测试文本～～12345';

console.log(`'${str}' 的字节长度是：${byteCount(str, 'utf-8')}`);