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




