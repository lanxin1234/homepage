
//导航条的设置开始
var count = 1;
   $(".navbar .container .navbar-collapse span").on("click",function(event){
        event.preventDefault();
        count ++;
          if(count % 2 == 0){
            // $("audio").removeAttr("muted");
            $(".ylbg>li").addClass("yinjie");
            startYinjie();
          }else{
            $(".ylbg>li").removeClass("yinjie");
            $("audio").attr("muted");
          }
       })
    //导航条的开启音阶点击的时候，开启
  function startYinjie(){
          //为导航条添加音阶
        var lis = document.querySelectorAll(".ylbg>li.yinjie");
        var audios = document.querySelectorAll("div.yinjie>audio");
       
      
        for(var i = 0; i <lis.length; i++){
                 lis[i].index = i;
                  lis[i].onmouseenter = function(){
                    //load保持之前的尾音，重新开始新的
                    audios[this.index].load();
                    audios[this.index].play();
                  }
                };
        //为数字键盘添加事件，按下数字键的时候导航条音阶开启
        document.onkeydown = function(event){
          var x = event.which || event.keyCode;
          audios[x - 97].load();
          audios[x - 97].play();
          lis[x - 97].className = "h";
          //开启一个定时器，在300毫秒后，去除span的类名，回到初始状态
          setInterval(function(){
              lis[x - 97].className = "";
          },300);
        }
      };
//导航条设置的结束
//轮播图自动轮播
$('.carousel').carousel({
  interval: 1000});
