var tabBtn = $('.tab-button')
var liLength = $('.list li')
console.log(liLength.length);
for (let i = 0; i < liLength.length; i++){
tabBtn.eq(i).on('click', function() {
  tabBtn.removeClass('orange')
  tabBtn.eq(i).addClass('orange')
  $('.tab-content').removeClass('show-content')
  $('.tab-content').eq(i).addClass('show-content')
})
}
// -> 왜 for문 변수를 var로하면 안되고 let으로하면 잘될까?
// tabBtn.eq(1).on('click', function() {
//   tabBtn.removeClass('orange')
//   tabBtn.eq(1).addClass('orange')
//   $('.tab-content').removeClass('show-content')
//   $('.tab-content').eq(1).addClass('show-content')
// })
// tabBtn.eq(2).on('click', function() {
//   tabBtn.removeClass('orange')
//   tabBtn.eq(2).addClass('orange')
//   $('.tab-content').removeClass('show-content')
//   $('.tab-content').eq(2).addClass('show-content')
// })
