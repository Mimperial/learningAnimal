(function numberAxle(root){

    root.ModelNumber = test1;

    function test1()/*{

            var aNumber = [ 24,  10, 45, 100, 110, 200, 150, 50];//数字数组为传入参数
            /!*将浮点数组转为整数数组*!/
            var aNewNumber = [];
            for (var i = 0; i < aNumber.length; i++) {
                aNewNumber.push(parseInt(aNumber[i]));
            }/!*end*!/
            /!*数组排序*!/
            function sequence(a, b) {
                if (a > b) {
                    return 1;
                } else if (a < b) {
                    return -1
                } else {
                    return 0;
                }
            }
            aNewNumber.sort(sequence)

            /!*计算点距离坐标原点的距离*!/
            var aDotDistance = [];

            var last_number = aNewNumber[aNewNumber.length - 1];
            var first_number = aNewNumber[0];
            var total_dist = last_number - first_number;

            var ratio = 1800.0 / total_dist //被除数为传入参数，不超过屏幕宽度为最佳显示方式

            for (var i = 0; i < aNewNumber.length; i++) {
                var dotDistance = ratio * aNewNumber[i];
                aDotDistance.push(dotDistance)
            }

            /!*画点和点对应的内容*!/
            var aDotStr = [];

            function getDot() {
                for (var k = 0; k < aDotDistance.length; k++) {
                    var dotStr = `<div class="line"></div>
                                 <div class="dots dots-odd" id="dot${k}">

                                 <div class="numberSelf-odd">${aNewNumber[k]}</div>
                                 <div class="beeline-odd"></div>
                                 <div class="numberLine-content-bottom" id=${k}>
                                     <p class="text-align-center">标题：</p>
                                     <img src="imgs/pts.jpg" alt="">
                                 </div>

                             </div>`
                    if (k % 2 !== 0) {
                        var dotStr = `<div class="line"></div>
                                     <div class="dots-even" id="dot${k}">

                                     <div class="numberLine-content-bottom numberLine-content-bottom-even" id=${k}>
                                         <p class="text-align-center">标题：</p>
                                         <img src="imgs/pts.jpg" alt="">
                                     </div>
                                     <div class="beeline-even"></div>
                                     <div class="dots" style="top: 17.8rem;">
                                         <div class="numberSelf-even">${aNewNumber[k]}</div>
                                     </div>

                             </div>`
                    }
                    aDotStr.push(dotStr);
                }
                return aDotStr.join(" ")
            }

            $('.contain-dot').append(getDot())

            /!*按照距离动态改变style.left属性使点水平移动*!/
            var nAdjoinDiff = 0;

            function doMove() {

                for (var j = 0; j < aDotDistance.length; j++) {
                    var divDots = document.getElementById("dot" + j);
                    var leftDis = divDots.style.left;
                    divDots.style.left = aDotDistance[j] + "px"; //每次循环的距离给到圆点，现在情况是每次只给1个节点定left，所以只出来一个，
                    nAdjoinDiff = parseInt(aDotDistance[j + 1] + "px") - parseInt(aDotDistance[j] + "px");

                    if (j % 2 !== 0) {
                        divDots.style.cssText = " top: -19rem;";
                        divDots.style.left = aDotDistance[j] + "px";
                    }
                    //                if(nAdjoinDiff < 260){
                    //                    console.log("相邻小于260")
                    //                    divDots.style.left = parseInt(aDotDistance[j])+300 + "px";
                    //
                    //                }
                }
            }

            doMove()
        
    }*/
    {
        console.log("立即执行")
    }

})(window)

ModelNumber()
