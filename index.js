let 시작좌표 = 0;
let 눌렀냐 = false;
var files = ['car1.PNG','car2.PNG','car3.PNG']
var picatureArr = new Array();
var eTarget;
var test222222 = 0
for(var i = 0; i < files.length; i++){
  $('.slide-container').append(`
    <div class="slide-box">
      <img src='${files[i]}' draggable="false" data-id='${[i]}'>
    </div>
    `)
}

$('img').click(function(e){
  $('.slide-box').eq(e.target.dataset.id).on('mousedown', function(e){
    console.log(e.target.dataset.id);
    시작좌표 = e.clientX;
    눌렀냐 = true;
  });

  $('.slide-box').eq(e.target.dataset.id).on('mousemove', function(e){
    if (눌렀냐 === true) {
      $('.slide-container').css('transform', `translateX( ${e.clientX - 시작좌표}px )`)
    }
  });
  $('.slide-box').eq(e.target.dataset.id).on('mouseup', function(e){
    눌렀냐 = false;
    if (e.clientX - 시작좌표 < -100) {
      $('.slide-container').css('transition', 'all 0.5s').css('transform', 'translateX(-'+e.target.dataset.id+1+'00vw)');
    } else {
      $('.slide-container').css('transition', 'all 0.5s').css('transform', 'translateX('+e.target.dataset.id+1+'00vw)');
    }
    setTimeout(()=>{
      $('.slide-container').css('transition', 'none')
    }, 500)
  });
})

  // 모바일 터치이벤트
  $('.slide-box').eq(0).on('touchstart', function(e){
    시작좌표 = e.touches[0].clientX;
    눌렀냐 = true;
  });

  $('.slide-box').eq(0).on('touchmove', function(e){
    if (눌렀냐 === true) {
      $('.slide-container').css('transform', `translateX( ${e.clientX - 시작좌표}px )`)
    }
  });

  $('.slide-box').eq(0).on('touchend', function(e){
    눌렀냐 = false;

    if (e.changedTouches[0].clientX - 시작좌표 < -100) {
      $('.slide-container').css('transition', 'all 0.5s').css('transform', 'translateX(-100vw)');
    } else {
      $('.slide-container').css('transition', 'all 0.5s').css('transform', 'translateX(0vw)');
    }
    setTimeout(()=>{
      $('.slide-container').css('transition', 'none')
    }, 500)
    
  });
