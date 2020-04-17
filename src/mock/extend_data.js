// mock的扩展方法
import Mock from "mockjs"; // 引入mock库
const random = Mock.Random;
random.extend({
    streets: function() {
        //这里的streets是将来要配合@使用的
        var streetList = ["陈阳寨", "世纪大道", "渭阳西路", "天谷八路"];
        return this.pick(streetList);
    }
});

export default random;
