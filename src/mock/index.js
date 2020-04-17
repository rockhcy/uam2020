// mock/index.js
import Mock from "mockjs";
import "./extend_data"; //扩展数据

// mock数据模板
let template = {
    "list|10-20": [
        // 重复次数在10--20之间（数组中的每一项）,如果是单独一个数字表示重复n次
        {
            // 数组中的每一项数据模板
            address: "@county()", // 生成随机的国家
            name: "@name()", // 生成随机的名字
            imgUrl: "@image()", //会随机生成一个图片url
            id: "@id()", // 随机的id
            "score|23-78.1-4": 1, // 是一个小数,整数部分在23-78之间,小数保留1-4位数
            "isShow|1": true, // isShow的值一半可能是true，一半可能是false
            "star|1-5": "nuc", // 重复字符串”nuc“,重复次数1-5次
            "index|+1": 1, // 属性值自动加 1，初始值为 number。index:1,index:2,index:3...
            "cities|5": ["@city()"], //属性值是一个数组,数组的每一项都是一个随机的城市，每一个数组的长度都是5
            props: {
                // 属性是一个对象
                "population|100-1000": 1,
                first: "@first()"
            },
            num: /\d{5,10}/, //属性值是正则，会生成符合正则表达式的数据,
            funcTem: function(param) {
                // 属性值是一个对象
                // console.log(param.context.currentContext); // 返回当前属性funcTem所在的对象
                return param.context.currentContext.id;
            },
            streetArr: "@streets" //每一项都是从模板数组中取的
        }
    ]
};

// 启动mock
Mock.mock("/api/getAddress", "get", template);
// Mock.mock("/api/getPerson", "get", templatePerson);
export default Mock;


