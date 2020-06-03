// main.js
(function($){
// Selector part
const body = $('body');
const wrap = body.children('#wrap');
const headBox = wrap.children('#headBox');
const viewBox = wrap.children('#viewBox');
const conBox = wrap.children('#conBox');
   const profileArea = conBox.children('.profile');
   const workArea = conBox.children('.work');
   const othersArea = conBox.children('.others');
const footBox = wrap.children('#footBox');


// html,js load part
   //url 변수선언
   let htmlUrl = './temp/';
   let tempS = '<script src="../js/src/temp/';
   let tempE = '.js"></script>';

   //load 선언
   headBox.load(htmlUrl+'headBox.html',function(){
      body.append(tempS+'headBox'+tempE);
   });

   viewBox.load(htmlUrl+'viewBox.html',function(){
      body.append(tempS+'viewBox'+tempE);
   });

   // conBox
   profileArea.load(htmlUrl+'con_profile.html',function(){
      body.append(tempS+'con_profile'+tempE);
   });

   workArea.load(htmlUrl+'con_work.html',function(){
      body.append(tempS+'con_work'+tempE);
   });

   othersArea.load(htmlUrl+'con_others.html',function(){
      body.append(tempS+'con_others'+tempE);
   });


   footBox.load(htmlUrl+'footBox.html',function(){
      body.append(tempS+'footBox'+tempE);
   });
// function part

})(jQuery);