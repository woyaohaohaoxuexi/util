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


/**
 * 数组去重
 * @param {Array} arr -- 原数组
 * @returns {Array} 去除重复数据后的数组
 */
function unique5(array){
    var r = [];
    for(var i = 0, l = array.length; i < l; i++) {
        for(var j = i + 1; j < l; j++) {
            if (array[i] === array[j]) {
                j = ++i;
                break;
            } 
            r.push(array[i]);  
        }
    }
    return r;
}

/**
 * 获取地址栏单个参数
 * @param {String} key -- 要获取的key
 * @returns {String} 获取到的值
 */
function getParam(key){
    var url = window.location.href; 
    var pattern = new RegExp('[?&]*'+ key +'=([^&]+)');
    try {
        var value = url.match(pattern)[1];
        return value;
    } catch (err) {
        return undefined;
    }
}

/**
 * 获取地址栏参数
 * @param {String} url -- 页面完整地址
 * @returns {Object} 地址携带的数据
 */
function getParams(url) {
    try {
        var index = url.indexOf('?');
        url = url.match(/\?([^#]+)/)[1];
        var obj = {}, arr = url.split('&');
        for (var i = 0; i < arr.length; i++) {
            var subArr = arr[i].split('=');
            obj[subArr[0]] = subArr[1];
        }
        return obj;

    } catch (err) {
        return null;
    }
}

