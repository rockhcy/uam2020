/* eslint-disable */
const Mock = require('mockjs')

Mock.mock('api/user', 'get', {
    'code': 0,
    'data': {
      'fullName': '@CNAME', // 随机生成中文人名
      'userId': 1000234234001,
      'username': 'zhangsan',
    },
    'msg': 'success',
});

// export default {
//     // 规则案例
//     rulesDemo: {
//       'rows|30-50': [
//         {
//           'personId': '@increment(1)',                  // Guid
//           'cName': '@cname',                            // 姓名
//           'userNO': '@word(1, 2)',                      // 用户编号
//           'domainId': '@cword(4, 7)',                   // 办公室
//           'eName': '@name',                             // 英文名
//           'birthDay': '@date("yyyy-MM-dd")',            // 出生日期
//           'email': '@email',                            // 个人邮箱
//           'sex': '@pick(["男", "女"])',                 // 性别
//           'idCard': '@id',                              // 身份证号
//           'orderNum': '@integer(1, 9)',                 // 排序值
//           'degree': '@ctitle(4, 5)',                    // 学历
//           'mobile': '@string("number", 11)',            // 手机
//           'birthPlace': '@county(true)',                // 出生地
//           'domainIdArr': '@range(2, 24, 2)',            // 关键岗位
//           'tecCompetence': '@cparagraph(1)',            // 技术能力
//           'remark': '@cparagraph',                      // 备注
//         },
//       ],
//     },
// };
