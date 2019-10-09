
//控制鼠标划过出现遮罩
var imageShow = document.getElementById("index_body_image_idName");
var imageDivBox = imageShow.getElementsByClassName("index_body_image_box");
for(let i = 0; i < imageDivBox.length; i ++){
    imageDivBox[i].onmouseenter = function(){
        var selfDom = this.getElementsByClassName("index_body_image_bottom")[0];
        selfDom.style.zIndex = "3"
    };
    imageDivBox[i].onmouseleave = function(){
        var selfDom = this.getElementsByClassName("index_body_image_bottom")[0];
        selfDom.style.zIndex = "0"
    }
}

