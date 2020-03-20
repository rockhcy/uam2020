/**
 * 对页面上输入的密码进行加密传输给后台进行验证，对返回的数据进行解密，在页面展示
 */
let CryptoJS = require('crypto-js'); // 引入AES源码js
export default {
    /*
    * 对密码进行加密，传输给后台进行验证
    * @param {String}   word  需要加密的密码
    * @param {String}   keyStr  对密码加密的秘钥
    * @return {String}   加密的密文
    * */
    encryptByDES(message) { //加密
        let keyHex = CryptoJS.enc.Utf8.parse("vesystem");
        let encrypted = CryptoJS.DES.encrypt(message, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    },

    decryptByDES(message) { // 解密
        let keyStr = CryptoJS.enc.Utf8.parse('vesystem');
        let decrypt = CryptoJS.DES.decrypt(message, keyStr, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    },
};
