// 复制对象
function copy (obj) {
    let copy = Object.create(Object.getPrototypeOf(obj));
    let propNames = Object.getOwnPropertyNames(obj);

    propNames.forEach(function (name) {
        let desc = Object.getOwnPropertyDescriptor(obj, name);
        Object.defineProperty(copy, name, desc);
    })

    return copy;
}

/**
 * 排序规则
 * 
 * @param {String} rule ['seriation', 'desc'] -- 正序或倒序 默认正序
 * @param {String} prototype -- 非必填，当对对象数组进行排序时: 传入作为排序依据的属性。
 * @returns 
 */
function compare (rule, prototype) {
    return function (a, b) {
        let valueA = !!prototype ? a[prototype] : a;
        let valueB = !!prototype ? b[prototype] : b;
        return rule === 'desc' ? valueB - valueA : valueA - valueB;
    }
}

/**
 * 区间随机数
 *
 * @param {Number} n -- 区间的底数
 * @param {Number} m -- 区间的顶数
 * @returns {Number} 随机数字
 */
const randomNumber = (n, m) => { return n + Math.floor(Math.random() * (m - n)) };
module.exports = {
    randomNumber
}

/**
 * 获取一个月有多少天
 * @param {Date} date -- 日期对象
 * @returns {Number} 要查询的日期所在月份有多少天   
 */
function getSomeDay(date) {
    if(date instanceof Date) {
        let dayLength = '';
        date.setMonth(date.getMonth() + 1);
        date.setDate(0);
        return date.getDate();
    } 
    return '';
}

/**
 * 计算某个月的第一天是星期几
 * @param {Date} date -- 日期对象
 * @returns {Number} 要查询的日期所在月份的第一天是星期几
 */
getMonthFirstDayWork(date) {
    if(date instanceof Date) {
        date.setDate(1);
        return date.getDay() === 0 ? 7 : date.getDay();
    }
    return '';
}




