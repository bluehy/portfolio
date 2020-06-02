// main.js
(function($){
// Selector part
const body = $('body');
const wrap = body.children('#wrap');
const headBox = wrap.children('#headBox');


// html,js load part
   //url 변수선언
   let htmlUrl = './temp/';
   let tempS = '<script src="../js/src/temp/';
   let tempE = '.js"></script>';

   //load 선언
   headBox.load(htmlUrl+'headBox.html',function(){
      body.append(tempS+'headBox'+tempE);
   });

// function part

})(jQuery);