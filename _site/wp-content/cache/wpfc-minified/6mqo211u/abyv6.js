// source --> https://neetadvisor.com/wp-content/plugins/preloader-plus//assets/js/preloader-plus.min.js?ver=1.1.1 
/*! preloader-plus 01-04-2018 */

jQuery(function($){var perfData=window.performance.timing,EstimatedTime=-(perfData.loadEventEnd-perfData.navigationStart),time=100*parseInt(EstimatedTime/1e3%60),preloader=document.querySelector(".preloader-plus");$("body").prepend(preloader);var progBar=document.querySelector(".prog-bar"),duration=time,counter=document.getElementById("preloader-counter");!function(element,start,end,duration){var range=end-start,current=start,increment=end>start?1:-1,stepTime=Math.abs(Math.floor(duration/range)),obj=element,timer=setInterval(function(){if(current<end&&(current+=increment),null!==obj&&(obj.style["transition-duration"]="0.001s",obj.style.width=current+"%"),null!==counter&&(counter.innerHTML=current+"%"),current==end&&perfData.loadEventEnd>0||perfData.loadEventEnd>0){var endLoading=setInterval(function(){current+=increment,null!==obj&&(obj.style.width=current+"%"),null!==counter&&(counter.innerHTML=current+"%"),100==current&&(setTimeout(function(){$("body, .preloader-plus").addClass("complete")},preloader_plus.animation_delay),clearInterval(endLoading))},1);clearInterval(timer)}},stepTime)}(progBar,0,70,duration)});