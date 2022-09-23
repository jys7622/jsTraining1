var products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' },
  { id : 3, price : 60000, title : '쿠아아악' }
];

$('.card-body1 h5').html(products[0].title)
$('.card-body1 p').html(products[0].price)
$('.card-body2 h5').html(products[1].title)
$('.card-body2 p').html('가격 :' +products[1].price)
$('.card-body3 h5').html(products[2].title)
$('.card-body3 p').html(products[2].price)

$.get('https://codingapple1.github.io/price.json').done(function(data){
  console.log(data);
}).fail(function(){
  console.log('실패');
})
fetch('https://codingapple1.github.io/price.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
  }).catch(error => {
    console.log(error);
  })

function addProduct(num){
num.forEach(function(i){
  $('.row').append(`
<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${i.title}</h5>
  <p>가격 : ${i.price}</p>
</div>`)
})
}
addProduct(products)
var list = []
$('.btn').on('click', function(){
  $.get('https://codingapple1.github.io/js/more1.json').done(function(data){
    addProduct(data)
  }).fail(function(){
    console.log('실패');
  })
})

var arr2 = [7,3,2,4,6,8,9,1,20];
arr2.sort(function(a,b) {
  return a-b
});
console.log(arr2);
