$(window).scroll(function(){
  var height = $(window).scrollTop();
  console.log(height);
  var opacityCnt = (-1/500) * height + 115/50
  var scaleCnt = (-1/5000) * height + 113/100
  // for(var i = 0; i < 3; i++){
    $('.card-box').eq(0).css('opacity',opacityCnt)
    $('.card-box').eq(0).css('transform',`scaleX(${scaleCnt-0.1})`);
    $('.card-box').eq(1).css('opacity',opacityCnt)
    $('.card-box').eq(1).css('transform',`scaleX(${scaleCnt})`);
    $('.card-box').eq(2).css('opacity',opacityCnt)
    $('.card-box').eq(2).css('transform',`scale(${scaleCnt})`);
// }  
});