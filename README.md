# learningAnimal

## 网站实例1
https://mimperial.github.io/learningAnimal/officialWeb/

## 网站实例2

https://mimperial.github.io/learningAnimal/staticPage/

### 前端开发流程：
提出需求（由页面流量、数据走向、交互表单互动组成的产品文档；服务器端工程师提供的接口文档；架构师/项目经理提出的项目背景软硬件及版本的需求文档）  

->分析需求（画出原型图、设计稿）  

->出UI设计稿、逻辑设计稿  

->静态页面   

->动态数据添加  

->发布测试环境  

->产品领导审核  

->发布上线  

->迭代更新

### 前端面试题及分析-javascript

1.阅读以下JavaScript代码：

```javascript
if (window.addEventListener) {
     var addListener = function(el, type, listener, useCapture) {
           el.addEventListener(type, listener, useCapture);
       };
   } else if (document.all) {
       addListener = function(el, type, listener) {
           el.attachEvent("on" + type, function() {
               listener.apply(el);
           });
       };
   }
   ```

请阐述 a) 代码的功能; b) 代码的优点和缺点; c) listener.apply(el) 在此处的作用; d) 如果有可改进之处，请给出改进后的代码，并说明理由。


a) 增加组件监听事件功能。
b）优点是能快速的给组件增加新的事件的功能。缺点是第二个addListener声明应当写在外面，或是加上var，否则成了全局函数。还没考虑其它的浏览器的兼容性，并且上下定义的函数参数个数不一样。
c）作用是让el做为调用者执行listener函数。
D) 
```javascript
addListener = function(el,type, listener, useCapture ) {
  if (window.addEventListener) {
1
el.addEventListener(type, listener, useCapture);
    } else if ( document . all ) {
 1
el.attachEvent("on" + type, function() { listener.apply(el); });
    }  
}
```
2.请编写一个JavaScript 函数toRGB，它的作用是转换CSS中常用的颜色编码。 要求：
```javascript
alert(toRGB("#0000FF"));          // 输出 rgb(0, 0, 255)
alert(toRGB("invalid"));          // 输出 invalid
alert(toRGB("#G00"));              // 输出 #G00
```
3.栈溢出是怎么回事？如何处理？
