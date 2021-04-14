<template>
    <div>
        <headTop></headTop>
        <div style="height:200px;">1</div>
        <div id="currentImage">
            <div id="currentImage2">
                <img class="cimage" style="display:block; float:left;" />
                <div class="cright" style="float:left;">
                    <div class="cname"></div>
                    <div class="ctitle"></div>
                    <div class="cdesc"></div>
                </div>
            </div>
        </div>
        <div id="imagesCr"> 
        </div>
    </div>
</template>
<script>
import headTop from '../headtop/headtop'
export default {
    name:'hover',
    components:{
        headTop
    },
    mounted(){   
            var imagew = 150, imageh = 170, colc=5, rowc=2, seph=10, spanc=3, sepw=10, animationtime=0.5;
            // imagew  后面可直接写像素值  如：150   也可以写百分比  $("父元素").width()*0.XX 相当于百分之xx
            // colc: 每行5个，rowc: 2行，seph: 上下边距，sepw: 左右边距，spanc: 跨度
            var imageData = [
                { path:require('../../assets/photopic/20.jpg'), name: 'name', title: '优秀设计师', desc: '生命承载设计，设计承载全部，只有这样才能找准一种元素、找对一种符号，组合得出' }
              , { path:require('../../assets/photopic/21.jpg'), name: 'name2', title: '优秀设计师2', desc: 'jQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。' }
              , { path:require('../../assets/photopic/22.jpg'), name: 'name3', title: '优秀设计师2', desc: '222张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师' }
              , { path:require('../../assets/photopic/23.jpg'), name: 'name4', title: '优秀设计师2', desc: '222张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师' }
              , { path:require('../../assets/photopic/20.jpg'), name: 'name5', title: '优秀设计师2', desc: '222张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师' }
              , { path:require('../../assets/photopic/21.jpg'), name: 'name6', title: '优秀设计师2', desc: '222张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师' }
              , { path:require('../../assets/photopic/22.jpg'), name: 'name7', title: '优秀设计师2', desc: '222张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师' }
              , { path:require('../../assets/photopic/23.jpg'), name: 'name8', title: '优秀设计师2', desc: '222张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师' }
              , { path:require('../../assets/photopic/21.jpg'), name: 'name9', title: '优秀设计师2', desc: '222张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师' }
              , { path:require('../../assets/photopic/22.jpg'), name: 'name10', title: '优秀设计师2', desc: '222张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师张惠妹优秀设计师' }]            
              $(function ()
                {
        var $imagesCr = $("#imagesCr"), $currentImage = $("#currentImage"), $currentImage2 = $("#currentImage2");

        $imagesCr.width((imagew + sepw) * colc + sepw).height((imageh + seph) * rowc + seph);
        $.each(imageData, function (idx, ele)
        {
          var imageText = '<img src="' + ele.path + '"/>';
          var nameText = '<div class="imageName">' + ele.name + '</div>';
          var $imageCr = $('<div class="imageCr" style="width:' + imagew + 'px; height:' + imageh + 'px;margin-top:' + seph + 'px; margin-left:' + sepw + 'px;">' + imageText + nameText + '</div>');
          $imagesCr.append($imageCr); $imageCr.attr("idx", idx.toString());
        });
        
        var images = $imagesCr.find(".imageCr");
        
        $imagesCr.mouseout(function ()
        {
          setTimeout(function ()
          {
            // if (isMouseInsideElement($imagesCr)) { console.log("prevent"); return; }
            if (isMouseInsideElement($imagesCr)) {  return; }
            else { $currentImage.hide(); currentImageIndex = -1; }
          }, 100);
        });


        var currentImageIndex = -1;
        images.each(function (idx, ele)
        {
          var $imageCr = $(ele); $imageCr.mouseover(function (event)
          {
            var dataIndex = parseInt($imageCr.attr("idx"));
            if (currentImageIndex != -1 && dataIndex == currentImageIndex) return; currentImageIndex = dataIndex;
            
            var cindex = dataIndex % colc, data = imageData[dataIndex];

            $currentImage.find(".cimage").attr("src", data.path);
            $currentImage.find(".cname").html(data.name);
            $currentImage.find(".ctitle").html(data.title);
            $currentImage.find(".cdesc").html(data.desc);

            $currentImage.stop();

            var mtop = seph + parseInt(dataIndex / colc) * (imageh + seph);
            var mleft = sepw + cindex * (imagew + sepw);
            var diff = spanc - (colc - cindex), aleft = 0; if (diff > 0)
            {
              aleft = (spanc-1) * (imagew + sepw);
            }
            $currentImage.css("margin-left", mleft).css("margin-top", mtop);
            

            $currentImage.width(imagew); $currentImage.show(); 

            $currentImage.css("fontSize", 0); $currentImage.animate(
              { fontSize: 100 },
              {
                duration: animationtime *2* 500,/* 鼠标移入 图片变化的时间 */
                step: function (now, fx)
                {
                  var clipw = imagew*0.5 * now / 100, cliph=imageh*0.5*now/100;
                  $currentImage.css('clip', 'rect(' + (imageh * 0.5 - cliph) + 'px, ' + (imagew * 0.5 + clipw) + 'px, ' + (imageh * 0.5 + cliph) + 'px, ' + (imagew * 0.5 - clipw) + 'px)');
                //   console.log(now);
                  if (now >= 100)
                  {
                    $currentImage.stop();
                    setTimeout(function ()
                    {
                    //   $currentImage.css('clip', '').css('fontSize', 16); console.log("start size ani");
                    $currentImage.css('clip', '').css('fontSize', 16); 
                      $currentImage.animate(
                        {
                          width: (imagew + sepw) * (spanc) - sepw,
                          marginLeft: "-=" + aleft,
                          specialEasing: { width: "easeOutBounce" }
                        }
                        , animationtime * 1000  /* 内容展开的时间*/
                        , function () { });
                    }, 100);
                  }
                }
              }); 

          });
        });
        $currentImage.width((imagew + sepw) * spanc - sepw).height(imageh).css("margin-left", sepw).css("margin-top", seph);
        $currentImage2.width($currentImage.width()).height($currentImage.height());
        $currentImage.find("img").width(imagew * 0.8).height(imageh * 0.8).css("margin-left", imagew * 0.1).css("margin-right", imagew * 0.1).css("margin-top", imageh * 0.1).css("margin-bottom", imageh * 0.1);
        $currentImage.find(".cright").width($currentImage.width() - imagew - 2);
        
        $currentImage.mouseout(function ()
        {
          setTimeout(function ()
          {
            // if (isMouseInsideElement($currentImage)) { console.log("prevent"); return; }
            // else { console.log("mouseout"); }
            if (isMouseInsideElement($currentImage)) {  return; }
            else {  }
          }, 100);
        })
        
      });

      var mousePostion = { x: -1, y: -1 };
      function isMouseInsideElement($rightElement)
      {
        var p = $rightElement.offset();
        return mousePostion.x >= p.left && mousePostion.x <= p.left + $rightElement.outerWidth() && mousePostion.y >= p.top && mousePostion.y <= p.top + $rightElement.outerHeight();
      }
      $(function ()
      {
        $(document).mousemove(function (event)
        {
          mousePostion.x = event.pageX;
          mousePostion.y = event.pageY;
        });
      });
    }
}
</script>
<style type="text/css">
    body{background-color: #2F2F2F}
    #imagesCr .imageCr { float: left; } 
    #imagesCr img { cursor: pointer; width: 100%; height: 100%; }
    #imagesCr .imageName{margin-top:-2em; color:white;padding-left:1em;}
    #currentImage { background-color: rgba(0, 0, 0, 0.8); display:none; position:absolute;z-index:999; overflow:hidden; }
    .cname{color: aliceblue;line-height: 30px;font-weight: 600;padding-top: 10px}
    .ctitle{color:#E9E9E9;line-height: 34px}
    .cdesc{color:#C3C3C3;font-size: 13px}
</style>
