/**
 * Created by Administrator on 2017/7/21.
 */
$(function () {
    //固定导航栏
    $(window).scroll(function () {
        var nScrollTop = $(this).scrollTop();
        var nHeader = $(".header").height();
        var oTabMenu = $(".tab-menu");
        if (nScrollTop >= nHeader) {
            if (oTabMenu.hasClass("py-tab-top")) {
                oTabMenu.css({position: "fixed", top: 0, marginTop: 0, backgroundColor: "#ffffff"})
            } else {
                oTabMenu.css({position: "fixed", top: 0, backgroundColor: "#ffffff"})
            }
        } else {
            if (oTabMenu.hasClass("py-tab-top")) {
                oTabMenu.css({position: "relative", marginTop: "-72px", background: "transparent"});
            } else {
                oTabMenu.css({position: "relative", background: "transparent"});
            }
        }
    });

    //页面切换
    $(".tab-item").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".tab-page").eq($(this).index()).addClass("active").siblings().removeClass("active");
    });

    //企业滚动
    function corpScroll() {
        var speed = 50;
        var oTabFootedPy = $(".tab-footed-py");
        var oPyItem1 = $("#py-item1");
        var oPyItem2 = $("#py-item2");
        oPyItem2.append(oPyItem1.html());
        if (oPyItem2[0]) {
            function Marquee() {
                if (oPyItem2[0].offsetWidth - oTabFootedPy[0].scrollLeft <= 0)
                    oTabFootedPy[0].scrollLeft = 0;
                else {
                    oTabFootedPy[0].scrollLeft++;
                }
            }

            var corpTimer = setInterval(Marquee, speed);
            oTabFootedPy.hover(function () {
                clearInterval(corpTimer);
            }, function () {
                corpTimer = setInterval(Marquee, speed);
            });
        }
    }

    //教师滚动
    function teacherScroll() {
        var i = 1;
        var oPcMiddle = $(".pc-middle");
        var oPcNewsUl = $(".pc-news-ul");
        var aPcNewsLis = $(".pc-news-li");
        var aPcDots = $(".pc-dot-knot");
        var aSpans = aPcDots.find("span");
        var nStep = aPcNewsLis.outerWidth();
        var teacherTimer;

        function move() {
            aSpans.eq(i).addClass("pc-dot-span").parent().siblings().find("span").removeClass("pc-dot-span");
            oPcNewsUl.animate({left: -nStep * i + "px"});
            i++;
            if (i > aSpans.length) {
                i = 1;
                aSpans.eq(i - 1).addClass("pc-dot-span").parent().siblings().find("span").removeClass("pc-dot-span");
                oPcNewsUl.animate({left: "0px"}, 0);
            }
        }

        teacherTimer = setInterval(move, 2000);
        oPcMiddle.hover(function () {
            clearInterval(teacherTimer);
        }, function () {
            clearInterval(teacherTimer);
            teacherTimer = setInterval(move, 2000);
        });
        aPcDots.hover(function () {
            clearInterval(teacherTimer);
        }, function () {
            clearInterval(teacherTimer);
            teacherTimer = setInterval(move, 2000);
        });
        aPcDots.click(function () {
            $(this).find("span").addClass("pc-dot-span");
            $(this).siblings().find("span").removeClass("pc-dot-span");
            i = $(this).index();
            oPcNewsUl.animate({left: -nStep * i + "px"});
        })
    }

    //查看课程
    $("#course-btn").click(function () {
        console.log($(this));
        $(".tab-item").eq(1).addClass("active").siblings().removeClass("active");
        $(".tab-page").eq(1).addClass("active").siblings().removeClass("active");
        $("html,body").animate({scrollTop: $(".header").height() - 70 + "px"});
    });

    //学生滚动
    function stuScroll() {
        var i = 0;
        var oStuMsgInner = $(".stu-msg-inner");
        var oStuItem1 = $(".stu-item1");
        var nStep = oStuItem1.find("li").outerWidth(true);
        var num = oStuItem1.find("li").length;
        $(".stu-item2").append(oStuItem1.html());
        var stuTimer = setInterval(advance, 2000);

        function advance() {
            oStuMsgInner.animate({left: -nStep * (i + 1)});
            i++;
            if (i >= num) {
                oStuMsgInner.animate({left: 0}, 0);
                i = 0;
            }
        }

        function retreat() {
            oStuMsgInner.animate({left: -nStep * (i - 1)});
            i--;
            if (i <= 0) {
                oStuMsgInner.animate({left: -nStep * (num - 1)}, 0);
                i = num - 1;
            }
        }

        $(".retreat").click(function () {
            retreat();
        });
        $(".advance").click(function () {
            advance();
        });
        $(".stu-intro").hover(function () {
            clearInterval(stuTimer);
        }, function () {
            stuTimer = setInterval(advance, 2000);
        });
    }

    //阿里云滚动
    function aliyunScroll() {
        var i = 1;
        var oPartner = $(".tactic-partner .wrap");
        var oAliyun = $(".tactic-partner-content");
        var oLi2 = $(".tactic-partner-tips li");
        var nStep = oAliyun.find("li").outerWidth();

        function move() {
            oLi2.eq(i).addClass("tip").siblings().removeClass("tip");
            oAliyun.animate({left: -nStep * i + "px"});
            i++;
            if (i > oLi2.length) {
                i = 1;
                oLi2.eq(i - 1).addClass("tip").siblings().removeClass("tip");
                oAliyun.animate({left: "0px"}, 0);
            }
        }

        var aliTimer = setInterval(move, 2000);
        oPartner.hover(function () {
            clearInterval(aliTimer);
        }, function () {
            aliTimer = setInterval(move, 2000);
        });
        oLi2.click(function () {
            $(this).addClass("tip").siblings().removeClass("tip");
            i = $(this).index();
            oAliyun.animate({left: -nStep * i + "px"});
        })
    }

    //体验试学
    function leaveMsg() {
        var oTip = $(".copy-right-form-ptwo");
        $(".input-submit").click(function () {
            var pattern = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/g;
            var sName = $(".inputname").val();
            var sTel = $(".inputel").val();
            if (!sName) {
                oTip.html("*请输入姓名！");
            } else if (!sTel) {
                oTip.html("*请输入电话号码！");
            } else if (!pattern.test(sTel)) {
                oTip.html("*请输入正确的手机号码！")
            } else {
                $.ajax({
                    url: "http://192.168.1.197:8000/jsonp/",
                    data: {'name': sName, 'phone': sTel, "sex": "nan"},
                    type: 'POST',
                    dataType: 'jsonp',
                    jsonp: 'callback',
                    jsonpCallback: 'call',
                    success: function (data, statusText, xmlHttpRequest) {
                        // 未指定jsonpCallback时，则自定执行方法
                        console.log(data);
                    }
                })
            }
        })
    }

    //评论瀑布流
    function reviews() {
        //瀑布流定位
        function waterFall() {
            var aDivs = $(".main-content>div");
            var pinHArr = [];
            var topArr = [];
            aDivs.each(function (index, value) {
                var pinH = aDivs.eq(index).height();
                if (index < 2) {
                    pinHArr[index] = pinH;
                } else {
                    var minH = Math.min.apply(null, pinHArr);
                    var minHIndex = $.inArray(minH, pinHArr);
                    $(value).css({
                        'position': 'absolute',
                        'top': minH + 40,
                        'left': aDivs.eq(minHIndex).position().left
                    });
                    pinHArr[minHIndex] += aDivs.eq(index).height() + 40;
                }
                topArr.push($(value).position().top)
            });
            var maxH = Math.max.apply(null, pinHArr);
            $(".main-content").height(maxH + 35)
        }

        //加载评论
        function addReviews(page) {
            //区分所处页面
            var aClasses = ["ai-item2-bg", "pm-item2-bg", "op-item2-bg", "ui-item2-bg", "py-item2-bg"];
            var aBgColors = ["ai-item-bg", "pm-item-bg", "op-item-bg", "ui-item-bg", "py-item-bg"];
            var aColors = ["ai-color", "pm-color", "op-color", "ui-color", "py-color"];
            var sContent = "主要之前没怎么接触过模块化设计，用这个视频教程作为学习 Vue 真是太好了，主要之前没怎么接触过模块化设计，网上对将这些方面的又不作为一个刚入门的前端工程师，用这个视频教程作为学习 Vue 真是太好了，主要之前没怎么接触过模块化设计，网上对将这些方面的又不,主要之前没怎么接触过模块化设计，用这个视频教程作为学习 Vue 真是太好了，主要之前没怎么接触过模块化设计，网上对将这些方面的又不作为一个刚入门的前端工程师，用这个视频教程作为学习 Vue 真是太好了，主要之前没怎么接触过模块化设计，网上对将这些方面的又不,主要之前没怎么接触过模块化设计，用这个视频教程作为学习 Vue 真是太好了，主要之前没怎么接触过模块化设计，网上对将这些方面的又不作为一个刚入门的前端工程师，用这个视频教程作为学习 Vue 真是太好了，主要之前没怎么接触过模块化设计，网上对将这些方面的又不，主要之前没怎么接触过模块化设计，用这个视频教程作为学习 Vue 真是太好了，主要之前没怎么接触过模块化设计，网上对将这些方面的又不作为一个刚入门的前端工程师，用这个视频教程作为学习 Vue 真是太好了，主要之前没怎么接触过模块化设计，网上对将这些方面的又不，主要之前没怎么接触过模块化设计，用这个视频教程作为学习 Vue 真是太好了，主要之前没怎么接触过模块化设计，网上对将这些方面的又不作为一个刚入门的前端工程师，用这个视频教程作为学习 Vue 真是太好了，主要之前没怎么接触过模块化设计，网上对将这些方面的又不，主要之前没怎么接触过模块化设计，用这个视频教程作为学习 Vue 真是太好了，主要之前没怎么接触过模块化设计，网上对将这些方面的又不作为一个刚入门的前端工程师，用这个视频教程作为学习 Vue 真是太好了，主要之前没怎么接触过模块化设计，网上对将这些方面的又不，主要之前没怎么接触过模块化设计，用这个视频教程作为学习 Vue 真是太好了，主要之前没怎么接触过模块化设计，网上对将这些方面的又不作为一个刚入门的前端工程师，用这个视频教程作为学习 Vue 真是太好了，主要之前没怎么接触过模块化设计，网上对将这些方面的又不";
            var sBg, sLight, nTmp, aIs, nLen;
            for (var l = 0; l < aClasses.length; l++) {
                if (page.hasClass(aClasses[l])) {
                    sBg = aBgColors[l];
                    sLight = aColors[l];
                }
            }
            for (var i = 0; i < 5; i++) {
                //创建元素
                var oMainItem1 = $("<div class='main-item1'></div>");
                var oAvatar = $("<div class='img'></div>");
                var oImg = $("<img src='../img/pm/student-pm.png' alt=''></div>");
                var oMainNav = $("<div class='main-nav'></div>");
                var oSpan = $("<span>周安伟</span>");
                var oUl = $("<ul></ul>");
                var oMainItemText = $("<div class='main-item-text ai-item-bg'></div>");
                for (var j = 0; j < 5; j++) {
                    var oLi = $("<li></li>");
                    var oI = $("<i class='iconfont icon-star'></i>");
                    oLi.append(oI);
                    oUl.append(oLi);
                }
                //随机生成点亮的星星数量
                nTmp = Math.floor(Math.random() * 5) + 1;
                aIs = $(oUl).find("i");
                for (var k = 0; k < nTmp; k++) {
                    aIs.eq(k).addClass(sLight);
                }
                oMainNav.append(oSpan, oUl);
                oAvatar.append(oImg);
                //随机添加文字长度
                nLen = Math.floor(Math.random() * sContent.length) + 1;
                oMainItemText.html(sContent.slice(0, nLen)).addClass(sBg, sLight);
                oMainItem1.append(oAvatar, oMainNav, oMainItemText);
                $(oMainItem1).insertBefore(".main-item2");
            }
        }

        //点击增加
        $(".main-item2").click(function () {
            addReviews($(this));
            waterFall();
        });
    }

    corpScroll();
    teacherScroll();
    stuScroll();
    aliyunScroll();
    leaveMsg();
    reviews();
});