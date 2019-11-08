/** 
 * element组件按需引入
*/


import { Message } from 'element-ui';

export let LZCMessage = (msg, type) => {
  Message({
    message: msg,
    type: type
  })
}
