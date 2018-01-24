
//创建ECharts图表
function DrawEChart(ec) {
    //--- 折柱 ---
    myChart = ec.init(document.getElementById('main'));
    //图表显示提示信息
    myChart.showLoading({
        text: "站点关系图正在努力加载..."
    });
    myChart.hideLoading();
    myChart.setOption({
        title: {
            text: 'STEP DAY：网站地图',
            subtext: 'From:www.stepday.com',
            x: 'right',
            y: 'bottom'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} : {b}'
        },
        legend: {
            x: 'left',
            data: []
        },
        series: [
            {
                type: 'force',
                name: "点击访问",
                categories: [
                    {
                        name: '点击访问',
                        itemStyle: {
                            normal: {
                                color: '#ff7f50'
                            }
                        }
                    }
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            textStyle: {
                                color: '#800080'
                            }
                        },
                        nodeStyle: {
                            brushType: 'both',
                            strokeColor: 'rgba(255,215,0,0.4)',
                            lineWidth: 8
                        }
                    }
                },
                minRadius: 15,
                maxRadius: 200,
                density: 0.05,
                attractiveness: 1.2,
                nodes: [
                    { category: 0, name: '博客', value: 10, url: "http://www.stepday.com/blog/" },
                    { category: 0, name: '论坛', value: 10, url: "http://www.stepday.com/post/" },
                    { category: 0, name: '管理', value: 10, url: "http://www.stepday.com/list/?1" },
                    { category: 0, name: "管理经验谈", value: 10, url: "http://www.stepday.com/list/?2" },
                    { category: 0, name: '管理课堂', value: 10, url: "http://www.stepday.com/list/?3" },
                    { category: 0, name: "技术", value: 10, url: "http://www.stepday.com/list/?6" },
                    { category: 0, name: "技术积累", value: 10, url: "http://www.stepday.com/list/?7" },
                    { category: 0, name: "技术讲座", value: 10, url: "http://www.stepday.com/list/?8" },
                    { category: 0, name: "技术探讨", value: 10, url: "http://www.stepday.com/list/?9" },
                    { category: 0, name: "创业", value: 10, url: "http://www.stepday.com/list/?10" },
                    { category: 0, name: "思考的准备", value: 10, url: "http://www.stepday.com/list/?11" },
                    { category: 0, name: "奋斗在路上", value: 10, url: "http://www.stepday.com/list/?12" },
                    { category: 0, name: "经营的思考", value: 10, url: "http://www.stepday.com/list/?13" },
                    { category: 0, name: "屌丝经济", value: 10, url: "http://www.stepday.com/list/?14" },
                    { category: 0, name: "投资理财", value: 10, url: "http://www.stepday.com/list/?15" },
                    { category: 0, name: "屌丝形象", value: 10, url: "http://www.stepday.com/list/?22" },
                    { category: 0, name: "健康指数", value: 10, url: "http://www.stepday.com/list/?23" },
                    { category: 0, name: "爱情季节", value: 10, url: "http://www.stepday.com/list/?24" },
                    { category: 0, name: "感悟生活", value: 10, url: "http://www.stepday.com/list/?30" },
                    { category: 0, name: "烦恼回收站", value: 10, url: "http://www.stepday.com/list/?32" },
                    { category: 0, name: "工作浅谈", value: 10, url: "http://www.stepday.com/list/?34" },
                    { category: 0, name: "神级吐槽", value: 10, url: "http://www.stepday.com/list/?35" },
                    { category: 0, name: "专题", value: 10, url: "http://www.stepday.com/zhuanti/highcharts/" },
                    { category: 0, name: "Highcharts API", value: 10, url: "http://www.stepday.com/zhuanti/highcharts/" },
                    { category: 0, name: "博客精简模式", value: 10, url: "http://www.stepday.com/zhuanti/picBlog/" },
                    { category: 0, name: "论坛精简模式", value: 10, url: "http://www.stepday.com/zhuanti/picPost/" },
                    { category: 0, name: '登录', value: 10, url: "http://www.stepday.com/login/" },
                    { category: 0, name: '注册', value: 10, url: "http://www.stepday.com/register/" },
                    { category: 0, name: 'STEP DAY', value: 10, url: "http://www.stepday.com" }
                ],
                links: [
                    { source: 0, target: 28, weight: 4 },
                    { source: 1, target: 28, weight: 4 },
                    { source: 26, target: 28, weight: 4 },
                    { source: 27, target: 28, weight: 4 },
                    { source: 2, target: 0, weight: 2 },
                    { source: 2, target: 1, weight: 2 },
                    { source: 5, target: 0, weight: 2 },
                    { source: 5, target: 1, weight: 2 },
                    { source: 9, target: 0, weight: 2 },
                    { source: 9, target: 1, weight: 2 },
                    { source: 13, target: 0, weight: 2 },
                    { source: 13, target: 1, weight: 2 },
                    { source: 15, target: 0, weight: 2 },
                    { source: 15, target: 1, weight: 2 },
                    { source: 22, target: 0, weight: 2 },
                    { source: 22, target: 1, weight: 2 },
                    { source: 3, target: 2, weight: 1 },
                    { source: 4, target: 2, weight: 2 },
                    { source: 6, target: 5, weight: 1 },
                    { source: 7, target: 5, weight: 2 },
                    { source: 8, target: 5, weight: 1 },
                    { source: 10, target: 9, weight: 1 },
                    { source: 11, target: 9, weight: 2 },
                    { source: 12, target: 9, weight: 1 },
                    { source: 14, target: 13, weight: 1 },
                    { source: 16, target: 15, weight: 2 },
                    { source: 17, target: 15, weight: 1 },
                    { source: 18, target: 15, weight: 1 },
                    { source: 19, target: 15, weight: 2 },
                    { source: 20, target: 15, weight: 1 },
                    { source: 21, target: 15, weight: 1 },
                    { source: 23, target: 22, weight: 2 },
                    { source: 24, target: 22, weight: 1 },
                    { source: 25, target: 22, weight: 1 }
                ]
            }
        ]
    });

    var ecConfig = require('echarts/config');
    //实现节点点击事件
    function focus(param) {
        var option = myChart.getOption();
        var data = param.data;
        //判断节点的相关数据是否正确
        if (data != null && data != undefined) {
            if (data.url != null && data.url != undefined) {
                //根据节点的扩展属性url打开新页面
                window.open(data.url);
            }
        }
    }
    //绑定图表节点的点击事件
    myChart.on(ecConfig.EVENT.CLICK, focus)
}
