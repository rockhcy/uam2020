// 项目通用方法，通过 this.$tools 调用
// import config from '@/config';
/**
 * @description 设置标题
 * @param {String}  title 标题文字
 */
export const setTitle = (title = '') => {
  window.document.title = title;
};


/**
 * @description 类数组对象转数组
 * @param {Object} objList  类数组对象
 * @return {Arrar}  数组
 */
export const toArray = args => Array.prototype.slice.call(args);


/**
 * @description 设置/获取数据存储(本地持久)
 * @param {String}  key         关键字
 * @param {any} data            存储数据
 */
// 存储容量判断
const storageError = (callback, storageType) => {
  try {
    callback();
  } catch (err) {
    if (err.name === 'QuotaExceededError') {
      storageType.clear();
      callback();
      throw new Error('已超出本地存储限定大小！');
    }
  }
};
export const setLocalStorage = (key, data) => {
  const jsonStr = JSON.stringify(data);
  const result = config.app.storageEncrypt ? window.encodeURIComponent(jsonStr) : jsonStr;
  storageError(() => {
    window.localStorage.setItem(key, result);
  }, 'localStorage');
};

export const getLocalStorage = (key) => {
  const data = window.localStorage.getItem(key);
  if (!data) return null;
  return JSON.parse(config.app.storageEncrypt ? window.decodeURIComponent(data) : data);
};


/**
 * @description 设置/获取数据存储(会话期间)
 * @param {String}  key         关键字
 * @param {any} data            存储数据
 * sessionStorage
 */
export const setSessionStorage = (key, data) => {
  const jsonStr = JSON.stringify(data);
  const result = config.app.storageEncrypt ? window.encodeURIComponent(jsonStr) : jsonStr;
  storageError(() => {
    window.sessionStorage.setItem(key, result);
  }, 'sessionStorage');
};

export const getSessionStorage = (key) => {
  const data = window.sessionStorage.getItem(key);
  if (!data) return null;
  return JSON.parse(config.app.storageEncrypt ? window.decodeURIComponent(data) : data);
};


/**
 * @description 返回IE浏览器版本，非IE返回 false
 */
export const IEVersion = () => {
  const { userAgent } = navigator; // 取得浏览器的userAgent字符串
  const isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1; // 判断是否IE<11浏览器
  const isEdge = userAgent.indexOf('Edge') > -1 && !isIE; // 判断是否IE的Edge浏览器
  const isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
  if (isIE) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    const fIEVersion = parseFloat(RegExp.$1);
    if (fIEVersion === 7) {
      return 7;
    } if (fIEVersion === 8) {
      return 8;
    } if (fIEVersion === 9) {
      return 9;
    } if (fIEVersion === 10) {
      return 10;
    }
    return 6;// IE版本<=7
  } if (isEdge) {
    return 'edge';// edge
  } if (isIE11) {
    return 11; // IE11
  }
  return false;// 不是ie浏览器
};


/**
 * @description 绑定事件
 * @param {HTMLElement} element dom元素
 * @param {String}  event       事件类型
 * @param {Function}  handler   事件绑定的方法
 */
// eslint-disable-next-line
export const on = (function () {
  if (document.addEventListener) {
    // eslint-disable-next-line
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  }
  // eslint-disable-next-line
  return function (element, event, handler) {
    if (element && event && handler) {
      element.attachEvent(`on${event}`, handler);
    }
  };
}());


/**
 * @description 解绑事件
 * @param {HTMLElement} element dom元素
 * @param {String}  event       事件类型
 * @param {Function}  handler   事件绑定的方法
 */
// eslint-disable-next-line
export const off = (function () {
  if (document.removeEventListener) {
    // eslint-disable-next-line
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  }
  // eslint-disable-next-line
  return function (element, event, handler) {
    if (element && event) {
      element.detachEvent(`on${event}`, handler);
    }
  };
}());


/**
 * @description 单次执行事件
 * @param {HTMLElement} element dom元素
 * @param {String}  event       事件类型
 * @param {Function}  handler   事件绑定的方法
 */
// eslint-disable-next-line
export const once = function (el, event, fn) {
  // eslint-disable-next-line
  const listener = function () {
    if (fn) {
      // eslint-disable-next-line
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};


/**
 * @description 获取文件后缀名
 * @param {String} fileName 文件全名
 * @param {Boolean} omitDot 是否省略后缀的点（默认保留.）,
 * @returns {String}        返回文件后缀，例：.png
 */
export const getFileSuffix = (fileName, omitDot) => {
  const indexed = fileName.lastIndexOf('.');
  return fileName.substring(omitDot ? indexed + 1 : indexed, fileName.length);
};


/**
 * @description 获取文件大小（MB）
 * @param {String} fileSize 文件大小(bit)
 * @returns {String}        返回文件大小(Mb)
 */
export const getFileSize = fileSize => fileSize / 1024 / 1024;


/**
 * @description 获取数据类型
 * @param {Any} data  数据对象
 * @returns {String}  数据类型，例：string
 */
export const getType = data => Object.prototype.toString.call(data).slice(8, -1).toLowerCase();


/**
 * @description 将普通对象转换为 formData 对象，适用于文件上传
 * @param {Object} params 参数对象
 */
export const getFormData = (params) => {
  const formData = new window.FormData();
  Object.keys(params).forEach((key) => {
    formData.append(key, params[key]);
  });
  return formData;
};


/**
 * @description 生成元素
 * @param {String} className  元素样式类名
 * @param {String} el         生成元素
 * @return {HTMLElement}      创建的元素
 */
export const createElem = (className, elType = 'div') => {
  const elem = document.createElement(elType);
  elem.classList.add(className);
  return elem;
};


/**
 * @description 获取元素属性值
 * @param {String} elem             dom元素
 * @param {String} attrName         属性名称
 * @param {Boolean} isConvertNumbar 是否转化为数值
 */
export const getElemAttrVal = (elem, attrName = 'width', isConvertNumbar = true) => {
  const oStyle = elem.currentStyle ? elem.currentStyle : window.getComputedStyle(elem, null);
  let val = '';
  if (oStyle[attrName]) {
    val = oStyle[attrName];
  } else {
    val = oStyle.getPropertyValue ? oStyle.getPropertyValue(attrName) : oStyle.getAttribute(attrName);
  }
  return isConvertNumbar ? parseFloat(val) : val;
};


/**
 * @description 设置输入域(input/textarea)光标的位置
 * @param {HTMLInputElement/HTMLTextAreaElement} el dom文本元素
 * @param {Number}  index                           光标位置
 */
export const setCursorPosition = (el, index) => {
  const val = el.value;
  const len = val.length;
  if (len < index) return; // 超过文本长度直接返回
  setTimeout(() => {
    el.focus();
    if (el.setSelectionRange) { // 标准浏览器
      el.setSelectionRange(index, index);
    } else { // IE9-
      const range = el.createTextRange();
      range.moveStart('character', -len);
      range.moveEnd('character', -len);
      range.moveStart('character', index);
      range.moveEnd('character', 0);
      range.select();
    }
  }, 10);
};


/**
 * @description 如果传入的数值小于10，即位数只有1位，则在前面补充0
 * @param {Number} n 数值
 * @returns {String} 处理后的字符串
 */
export const zeroize = n => (n < 10 ? `0${n}` : n);


/**
 * @description 截取日期字符串
 * @param {String} dateStr 日期字符串
 */
export const sliceDate = (dateStr, place = 10) => {
  if (typeof dateStr !== 'string') return '';
  if (dateStr.length <= place) return dateStr;
  return dateStr.slice(0, place);
};


/**
 * @description 获取时间戳转换的日期
 * @param {Number} timeStamp  传入的时间戳
 * @param {Number} startType  要返回的时间字符串的格式类型，传入'year'则返回年开头的完整时间
 * @returns {String}          处理后的日期字符串
 */
export const getTimestampDate = (timeStamp, startType) => {
  const d = new Date(timeStamp * 1000);
  const year = d.getFullYear();
  const month = zeroize(d.getMonth() + 1);
  const date = zeroize(d.getDate());
  const hours = zeroize(d.getHours());
  const minutes = zeroize(d.getMinutes());
  const second = zeroize(d.getSeconds());
  let resStr = '';
  if (startType === 'year') resStr = `${year}-${month}-${date} ${hours}:${minutes}:${second}`;
  else resStr = `${month}-${date} ${hours}:${minutes}`;
  return resStr;
};


/**
 * @description 获取相对于当前的日期间隔
 * @param {String|Number} timeStamp 时间戳
 * @returns {String} 相对时间字符串
 */
export const getRelativeTime = (timeStamp) => {
  let timeStampTemp = timeStamp;
  // 判断当前传入的时间戳是秒格式还是毫秒
  const IS_MILLISECOND = String(timeStampTemp).length > 10;
  // 如果是毫秒格式则转为秒格式
  if (IS_MILLISECOND) Math.floor(timeStampTemp /= 1000);
  // 传入的时间戳可以是数值或字符串类型，这里统一转为数值类型
  timeStampTemp = Number(timeStampTemp);
  // 获取当前时间时间戳
  const currentTime = Math.floor(Date.parse(new Date()) / 1000);
  // 判断传入时间戳是否早于当前时间戳
  const IS_EARLY = timeStampTemp < currentTime;
  // 获取两个时间戳差值
  let diff = currentTime - timeStampTemp;
  // 如果IS_EARLY为false则差值取反
  if (!IS_EARLY) diff = -diff;
  let resStr = '';
  const dirStr = IS_EARLY ? '前' : '后';
  // 少于等于59秒
  if (diff <= 59) resStr = `${diff}秒${dirStr}`;
  // 多于59秒，少于等于59分钟59秒
  else if (diff > 59 && diff <= 3599) resStr = `${Math.floor(diff / 60)}分钟${dirStr}`;
  // 多于59分钟59秒，少于等于23小时59分钟59秒
  else if (diff > 3599 && diff <= 86399) resStr = `${Math.floor(diff / 3600)}小时${dirStr}`;
  // 多于23小时59分钟59秒，少于等于29天59分钟59秒
  else if (diff > 86399 && diff <= 2623859) resStr = `${Math.floor(diff / 86400)}天${dirStr}`;
  // 多于29天59分钟59秒，少于364天23小时59分钟59秒，且传入的时间戳早于当前
  else if (diff > 2623859 && diff <= 31567859 && IS_EARLY) resStr = getTimestampDate(timeStampTemp);
  else resStr = getTimestampDate(timeStampTemp, 'year');
  return resStr;
};


/**
 * @description 由一个组件，向上找到最近的指定组件
 * @param {Object} context        当前上下文，也就是传入 this
 * @param {String} componentName  查找的组件的 name
 * @returns 组件
 */
export const findComponentUp = (context, componentName) => {
  let parent = context.$parent;
  let { name } = parent.$options;

  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) {
      // eslint-disable-next-line
      name = parent.$options.name;
    }
  }
  return parent;
};


/**
 * @description 由一个组件，向上找到所有的指定组件, 一般只用在递归组件里面
 * @param {Object} context        当前上下文，也就是传入 this
 * @param {String} componentName  查找的组件的 name
 * @returns 组件集
 */
export const findComponentsUp = (context, componentName) => {
  const parents = [];
  const parent = context.$parent;

  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent);
    return parents.concat(findComponentsUp(parent, componentName));
  }
  return [];
};


/**
 * @description 由一个组件，向下找到最近的指定组件
 * @param {Object} context        当前上下文，也就是传入 this
 * @param {String} componentName  查找的组件的 name
 * @returns 组件
 */
export const findComponentDown = (context, componentName) => {
  const childrens = context.$children;
  let children = null;

  if (childrens.length) {
    // eslint-disable-next-line
    for (const child of childrens) {
      const { name } = child.$options;

      if (name === componentName) {
        children = child;
        break;
      } else {
        children = findComponentDown(child, componentName);
        if (children) break;
      }
    }
  }
  return children;
};


/**
 * @description 由一个组件，向下找到所有指定的组件
 * @param {Object} context        当前上下文，也就是传入 this
 * @param {String} componentName  查找的组件的 name
 * @returns 组件集
 */
export const findComponentsDown = (context, componentName) => context.$children.reduce((components, child) => {
  if (child.$options.name === componentName) {
    components.push(child);
  }
  const foundChilds = findComponentsDown(child, componentName);
  return components.concat(foundChilds);
}, []);


/**
 * @description 由一个组件，找到指定组件的兄弟组件
 * @param {Object} context        当前上下文，也就是传入 this
 * @param {String} componentName  查找的组件的 name
 * @param {Boolean} exceptMe      是否把本身除外
 * @returns 组件
 */
export const findBrothersComponents = (context, componentName, exceptMe = true) => {
  const res = context.$parent.$children.filter(item => item.$options.name === componentName);
  const index = res.findIndex(item => item._uid === context._uid);
  if (exceptMe) res.splice(index, 1);
  return res;
};


/**
 * @description 动态载入插件
 * @param {String} globalName 插件抛出的全局变量名称
 * @param {Object} option 生成的 <script> 标签的属性
 */
export const asyncLoadPlugin = (globalName = '', option) => new Promise((resolve, reject) => {
  // 若已加载直接该插件的全局变量
  if (window[globalName]) {
    resolve(window[globalName]);
  } else {
    // 创建标签元素
    const script = document.createElement('script');
    // 配置属性
    const { src } = option;
    delete option.src;
    const options = Object.assign({
      type: 'text/javascript',
      async: true,
      onerror: reject,
    }, option);
    Object.keys(options).forEach((key) => {
      script[key] = options[key];
    });
    // 获取载入后的回调
    // eslint-disable-next-line
    script.onload = script.onreadystatechange = function() {
      if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
        resolve(window[globalName]);
        // eslint-disable-next-line
        script.onload = script.onreadystatechange = null;
      }
    };
    script.src = src;
    // 载入标签
    document.head.appendChild(script);
  }
});


/**
 * @description 获取文字所占宽度
 * @param str 字符串
 */
export const getTextLen = (str, fontSize = 16) => {
  const strItem = str.split('');
  const count = [0, 0];
  strItem.forEach((item) => {
    if (IEVersion() && new RegExp(/[\u4e00-\u9fa5]/, 'u').test(item)) {
      count[0]++;
    } else if (new RegExp(/\p{Unified_Ideograph}/, 'u').test(item)) {
      count[0]++;
    }
  });
  count[1] = strItem.length - count[0];
  if (fontSize) {
    return (count[0] * fontSize) + (count[1] * (fontSize / 2));
  }
  return count;
};


/**
 * @description 获取滚动条位置
 */
export const getScrollTop = () => {
  let top = 0;
  if (document.documentElement && document.documentElement.scrollTop) {
    top = document.documentElement.scrollTop;
  } else if (document.body) {
    top = document.body.scrollTop;
  }
  return top;
};


/**
 * @description 取层级对象指定字段值
 * @param {Array} array   层级数组对象
 * @param {String} field  取值字段名, 若为false，则返回数据项
 * @param {String} depth  子层级字段名
 */
export const getDepthVal = (array, field, depth = 'children') => {
  const result = [];
  const fn = (data) => {
    data.forEach((item) => {
      if (item[depth] && item[depth].length) {
        fn(item.children);
      } else {
        result.push(field ? item[field] : item);
      }
    });
  };
  fn(array);
  return result;
};
