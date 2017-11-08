# learningAnimal
前端面试题及分析-javascript

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
