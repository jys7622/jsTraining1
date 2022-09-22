var tabBtn = $('.tab-button');
// var liLength = $('.list li')
// for (let i = 0; i < liLength.length; i++){
//   tabBtn.eq(i).on('click', function() {
//     openTab(i)
//   })
// }


// 이벤트리스너 1개만 쓰기 ( 이벤트리스너 줄어들수록 RAM사용량 줄어들어 성능 개선 가능.)
$('.list').click(function(e) {
  // 지금 누른게 버튼 0이면 탭열기(0)  
  console.log(e.target.dataset.id);
  openTab(parseInt(e.target.dataset.id))
  // 지금 누른게 버튼 0이면 탭열기(1)  
  // 지금 누른게 버튼 0이면 탭열기(2)  
})
function openTab(num) {
  tabBtn.removeClass('orange')
  tabBtn.eq(num).addClass('orange')
  $('.tab-content').removeClass('show-content')
  $('.tab-content').eq(num).addClass('show-content')
}

var carInfo = ['소나타', 50000, 'white']; // Array
var carInfo2 = {name :'아반떼', price : [50000,30000,10000]}; // Object

$('.card').html(carInfo2.name +" "+ carInfo2.price[1])


$('.form-select').eq(0).on('input',function(){
  // var formVal = $('.form-select').eq(0).val();
  var formVal = this.value;
  // function안에서의 this는 e.currentTarget
  // 하지만 화살표함수 => 를 쓰게되면 바깥에 있는 this를 가져다 쓰게됨.
  var shirts = [95,100,105];
  var pants = [49, 55, 32];
  var obj = {name:'j', age :30}
  if(formVal === '셔츠'){
    console.log("this",this);
    $('.size').removeClass('select');
    $('.size').html('');
    shirts.forEach(function(i,index){
      $('.size').append(`<option>${index+1}. ${i}</option>`)
    })
    for(var i in obj){
      console.log(obj[i])
    }
  } else if(formVal === '바지') {
    $('.size').removeClass('select');
    $('.size').html('')
    //바지인 경우 셀렉트 테그 안의 값을 바꿔줘
    pants.forEach(function(i){
      $('.size').append(`<option>${i}</option>`);
      console.log(i);
    })
  } else if(formVal === '모자'){
    $('.size').addClass('select');
  }
})
// $('.form-select').eq(0).on('input', function(){

//   var value = $('.form-select').eq(0).val();
//   if (value == '셔츠') {
//     // $('.form-select').eq(1).removeClass('form-hide');
//     console.log('hiohihs');
//   }

// });
var a = document.createElement('p');
a.innerHTML = '안녕'
document.querySelector('#test').appendChild(a);

var template = '<p>안녕2222</p>';
document.querySelector('#test').insertAdjacentHTML('beforeend',template);
// jquery
$('#test').append(template); // 기존에 있던 태그 값에 추가해줌
// innerHTML은 기존값을 덮어씀

//바지를 선택했을 때 숫자를 바꾼다...