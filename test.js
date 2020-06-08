// JavaScript Document
var Dianji=0;
window.onload=function(){
    var buhao = document.getElementById("buhao");
    var hao = document.getElementById("hao");
    buhao.onclick=function(){
        Dianji++;
        if(Dianji==1){
            alert("再给你一次机会");
        }else if(Dianji==2){
            alert("你故意的");
        }else if(Dianji==3){
            alert("我不信");
        }else if(Dianji==4){
            alert("你个臭猪猪");
        }else if(Dianji==5){
            alert("呜呜呜");
        }else if(Dianji==6){
            alert("可我好想你");
            Dianji=1;
        }

    }
    hao.onclick=function(){
        alert("我也超级想你，mua！");
    }


}
