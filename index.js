var start = 0;
var click = false;
$('.slide-box').eq(0).on('mousedown', function(e){
  start = e.clientX;
  click = true;
});
$('.slide-box').eq(0).on('mousemove', function(e){
  
 if(click === true){
  console.log(e.clientX-start);
  $('.slide-container').css('transform',`translateX(${e.clientX-start}px)`)
  }
  
})

$('.slide-box').eq(0).on('mouseup', function(e){
  click = false;
    console.log('땟다');
  if(e.clientX - start  < -100){
    $('.slide-container').css('transform', 'translateX(-100vw)');
  } else {
    $('.slide-container').css('transform', 'translateX(0vw)')
  }
})

//마우스 클릭 안했을 때 100px 이상 이동했으면 둘째사진보이고 아니면 첫째사진 보임