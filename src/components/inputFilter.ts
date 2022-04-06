import { App } from 'vue';
/**
 *  实现功能
 *  1、默认情况下只禁止空格输入
 *  2、限制只能输入整数
 *  3、限制只能输入整数和小数（价格类）
 *  4、限制只能输入手机号
 *  5、限制最大值和最小值(抛出错误给回调函数)
 */
const addListener = function (el: any, type: any, fn: any) {
    el.addEventListener(type, fn, false)
}
const spaceFilter = function (el: any) {
    addListener(el, 'keyup', () => {
        el.value = el.value.replace(/\s+/, '')
    })
}
const intFilter = function (el: any) {
    addListener(el, 'keyup', () => {
        // el.value = el.value.replace(/[^\d\.]/, '');
        el.dispatchEvent(new Event('input'));
    })
}
const priceFilter = function (el: any) {
    addListener(el, 'keyup', () => {
        el.value = el.value.replace(/[^\d.]*/g, '')
        // if (isNaN(el.value)) {
        //     el.value = ''
        // }
        el.dispatchEvent(new Event('input'));
    })
}
const phoneFilter = function (el: any) {
    addListener(el, 'blur', () => {
        if (!el.value) {
            return
        }
        const phoneReg = new RegExp('^(13|14|15|16|17|18|19)[0-9]{9}$')
        if (!phoneReg.test(el.value)) {
            alert('手机号输入错误')
            el.value = ''
        }
    })
}
const urlFilter = function (el: any) {
    addListener(el, 'blur', () => {
        if (!el.value) {
            return
        }
        const urlReg = /(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/
        if (!urlReg.test(el.value)) {
            alert('url输入错误')
            el.value = ''
        }
    })
}
export default (app: App) => {
    app.directive('inputFilter', {
        mounted(el, binding) {
            console.log(1212);
            const ele: any = el.tagName === "INPUT" ? el : el.querySelector("input");
            let val = ele.value;
            val = val.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
            val = val.replace(/^\./g, ""); //验证第一个字符是数字
            val = val.replace(/\.{2,}/g, "."); //只保留第一个, 清除多余的
            val = val.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
            // val = val.replace(/^(\-)*(\d+)\.(\d\d\d).*$/, '$1$2.$3'); //只能输入三个小数
            ele.value = val;
            console.log(ele.value );
        }
    })
}