
var products = [
  { id : 0, price : 70000, title : 'Blossom Dress', cnt : 0 },
  { id : 1, price : 50000, title : 'Springfield Shirt',cnt : 0 },
  { id : 2, price : 60000, title : 'Black Monastery',cnt : 0 },
  { id : 3, price : 80000, title : '쿠아아악',cnt : 0 }
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
  <p id='cntText'>${i.cnt}</p>
  <button class="buyBtn">구매</button>
</div>`)
})
}
addProduct(products)
var list = []
var list2 = []
var btnCnt = 0;

$('.btn').on('click', function(){
  btnCnt ++;
 
 
  $.get('https://codingapple1.github.io/js/more1.json').done(function(data){
   
    console.log("data", data);
    if(list.length > 0){
      alert('중복된 상품이 있습니다.')
    } else {
    list = data
    addProduct(data)
    }
   
  }).fail(function(){
    console.log('실패');
  })
  if(btnCnt === 2){
    $.get('https://codingapple1.github.io/js/more2.json').done(function(data){
      if(list2.length > 0){
        alert('중복된 상품이 있습니다.')
      } else {
      list2 = data
      addProduct(data)
      }
    }).fail(function(){
      console.log('실패');
    })
  }
})
//------------------가격정렬

$('.priceBtn').on('click',function() {
  var priceFilterList = products.filter((item)=>{
    return item.price < 60000
  })
  console.log(priceFilterList);
  products.sort(function(a,b){
    //a, b는 배열 안에 있는 데이터 하나를 의미.
    // 배열안에 객채 형태로 들어가있기 때문에 a, b는 객체 1개를 의미.
    // 따라서 객체 데이터에 접근하는 방식을 사용해야함.
    return a.price - b.price
  })
  $('.row').html('');
  addProduct(priceFilterList)
})
// 이름정렬
$('.titleBtn').on('click', function(){
  products.sort(function(a,b){
    let x = a.title.toLowerCase();
    let y = b.title.toLowerCase();
    if( x < y){
      return 1;
    }
    if( x > y){
      return -1;
    }
    return 0;
  })
  $('.row').html('');
  addProduct(products)
})
var arr2 = [7,3,2,4,6,8,9,1,20];
var arr3 = ['d','g','a','b','e']
arr2.sort(function(a,b) {
  return a-b
});
// a-b는 배열 안의 자료를 의미
// 7과 3을 a,b로 비교했을  7-3이 양수이면 a를 b의 오른쪽으로 보냄
// 7-3이 음수라면 b를 a의 오른쪽으로 보냄
// 따라서 7-3 = 4 양수이기때문에 7이 3보다 오른쪽에 위치하게 된다.
console.log(arr2);

// filter
var filterTest = arr2.filter((item)=>{
  return  item < 4;
})
console.log(filterTest);

// map


//상품 제목순으로 정렬(역순으로)

//6만원 이하 상품만 보기

//가격 입력으로 찾기
$('.inputBtn').click(function(){
 var inputPrice = $('.priceInput').val()
 var inputrPirceList = products.filter((item) =>{
  return item.price <= parseInt(inputPrice)
 })
 $('.row').html('')
 addProduct(inputrPirceList)
})

//원래대로
$('.rollBackBtn').click(function() {
  $('.row').html('')
 addProduct(products)
})

// Local Storage
// LS에 배열 강제로 넣는 법
var testArr = [1,2,3]
var newArr = JSON.stringify(testArr); // 배열을 JSON형태로 바꾼다.(""처리된 자료형태)
// var returnArr = parse(newArr) // JSON형태의 자료를 다시 배열, 객체 형태로 변환.
localStorage.setItem('num', newArr)
// removeItem('이름') // 요소 삭제

// 구매버튼 누르면 누른 상품명 LS에 저장하기.
  // 1. 형제요소 찾는 법(sibling)
  // 2. LS에 cart라는 배열이 없을 때는 새로운 배열 추가
  // 3. cart라는 배열이 있을 때는 기존에 있는 cart라는 배열 수정
var testArr = [];
var testarrrr = [1,4,5];
var dupYn = false
var cartCnt ={cnt : 0}
var filterArr = []
$('.buyBtn').click(function(e){
  // 구매버튼 클릭하면 클릭한 버튼에 해당하는 정보의 cnt에 +1 해줘
  var sible = $(e.target).siblings('h5').text();
  var testCheckCnt = parseInt($(e.target).siblings('#cntText').text());
  // console.log("testCheckCnt",testCheckCnt);
  var cart = {name :sible , count : testCheckCnt}
   cart.count = cartCnt.cnt 
  // var checkDup = testArr.some(v => v.name === sible);
  // if(checkDup) {
  //   alert('중복입니당')
  // }
  testArr.push(cart);
  var found = testArr.find(item => item.name === sible)
  if(sible === found.name){
    found.count++;

  }
  // testArr.push(found);

  filterArr = testArr.filter(item => 
    item. count > 0
  )
  localStorage.setItem('proName', JSON.stringify(filterArr))
  // 배열에 있는 객체를 꺼내서 보여준다.
  console.log(filterArr);
})
// cart.html 새로 만들어서 장바구니에 들어가있는 상품명들 다 진열하기.
var test23 = localStorage.getItem('proName')
var proName1 = `<h5>${filterArr[0]}</h5>`
var proName = `<h5>${localStorage.getItem('proName')}</h5>`
var proCnt = `<p>${JSON.parse(test23)}</p>`
$('.displayBtn').click(function(){
  $('.proName').append(proName)
})