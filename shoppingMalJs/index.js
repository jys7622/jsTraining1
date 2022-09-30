var xhr;
var filterArr = [];
var filterArr2 = [];
var proCnt;
let cart = [];
let products = [];
let searchList = [];
// function openJson(){
//   xhr = new XMLHttpRequest();
//   xhr.open('get', 'store.json', true);
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4) {
//       if(xhr.status == 200){
//         process2();
//       }
//     }
//   }
//   xhr.send(null);
// }
// openJson()

// function process2(){
// 	/*Json 파일 읽어오기*/
// 	var data = xhr.responseText;
// 	//alert(data);/*그냥 Text 파일*/
// 	var parseData = JSON.parse(data);	//JSON라는 객체는 parse라는 메소드를 가지고 있음
// 	//alert(parseData);/*[object Object](객체화 됨)*/
// 	//alert(parseData.product.length);
// 	for (var i = 0; i < parseData.products.length; i++) {
//     $('.card-container').append(`
//       <div class='proCard'>
//         <img src='${parseData.products[i].photo}'>
//         <div class='title'>${parseData.products[i].title}</div>
//         <div class='brand'>${parseData.products[i].brand}</div>
//         <div class='price'>${parseData.products[i].price}</div>
//         <button class="buyBtn">담기</button>
//       </div> 
//     `)
// 	}
//   $('.buyBtn').on('click', function(e) {
//     //필터로 전체 리스트에서 클릭한 것과 title이같은것만 찾는다
//     products = parseData.products
//     var title = $(e.target).siblings('.title').text();
//     proCnt = $(e.target).siblings('.cnt').text();
//     let filterItems = filterArr.findIndex((item) => item.title === title)
//     var filterCnt = products.filter((item) => item.title != title)
//     console.log(filterItems);
//     if(filterItems == -1){
//       // 내가 찍은 상품이 장바구니에 없다면?
//       // 내가 찍은 상품을 장바구니에 넣는다
//       // 전체 상품에서 내가 찍은 상품과 일치하는 상품명이 있는지 찾는다
//       let mySelectItem = products.find((item) =>
//         item.title == title
//       )
//       mySelectItem.cnt = 1;
//       filterArr.push(mySelectItem)
//       console.log(filterArr);
//     } else {
//       filterArr[filterItems].cnt++;
//       console.log("hhh");
//     }
   
//     // if(filterItems.title === title){
//     //   filterItems.cnt = 1
//     //   filterArr.push(filterItems)
      
//     // } else {
//     //   filterItems.cnt++;
//     // }
//     //이미 들어가있는 상품은 지운다
  
//     //담기버튼 누르면 해당 상품만 장바구니 div에 옮겨줘!
//     $('.proStore-container').html('')
//     filterArr.map((item)=>{
//       $('.proStore-container').append(`
//       <div class='proCard1'>
//         <img src='${item.photo}'>
//         <div class='title'>${item.title}</div>
//         <div class='brand'>${item.brand}</div>
//         <div class='price'>${item.price}</div>
//         <div class='cnt'>${item.cnt}</div>
//       </div> 
//       `)
//     })
    
//   })
// }

$.get('store.json').then((data=>{
  products = data.products
  for (var i = 0; i < data.products.length; i++) {
        $('.card-container').append(`
          <div class='proCard'>
            <img src='${data.products[i].photo}'>
            <div class='title'>${data.products[i].title}</div>
            <div class='brand'>${data.products[i].brand}</div>
            <div class='price'>${data.products[i].price}</div>
            <button class="buyBtn" data-id="${data.products[i].id}">담기</button>
          </div> 
        `)
  }

  $('.buyBtn').click(function(e){
    let proId = e.target.dataset.id
    // cart배열에 있는 id와 내가 현재 찍은 상품의 id가 같은지 판별
    let itemIndex = cart.findIndex((item) =>  item.id == proId)
    // findIndex는 일치하는 값이 있으면 몇개 있는지 그 숫자를 반환
    // 없으면 -1을 반환
    // -1일 때 (cart안에 중복되는 값이 없을 때)
    if(itemIndex == -1) {
      // 내가 선택한 상품 -> 진열된 상품의 id와 내가 찍은 상품의 item이 일치하는 것
      let selectItem = products.find((item) => item.id == proId)
      selectItem.cnt = 1;
      cart.push(selectItem) // 내가 찍은 상품 cart(장바구니)로 넘김
    } else {
      cart[itemIndex].cnt++;
    }

    $('.proStore-container').html('');
    cart.forEach((item) => {
      $('.proStore-container').append(`
        <div class="proCard">
          <img src='${item.photo}'>
          <div class='title'>${item.title}</div>
          <div class='brand'>${item.brand}</div>
          <div class='price'>${item.price}</div>
          <div class='price'>${item.cnt}</div>
        </div>
      `)
    })
  })
  
}))
 // 검색어
function search() {
    // 인풋에 넣은 값과 장바구니안에 있는 배열 요소의 값이 일치하는지? 문자 검사
  $('.searchWord').on('change', function(){
    // $('.proStore-container').html('');
    let searchWord = $('.searchWord').val();
    // searchList에 있는지 검사
    // 
    let newProducts = products.filter((item)=>{
      return item.title.includes(searchWord) || item.brand.includes(searchWord)
    });
    $('.proStore-container').html('');
    newProducts.forEach((item) => {
      $('.proStore-container').append(`
        <div class="proCard">
          <img src='${item.photo}'>
          <div class='title'>${item.title}</div>
          <div class='brand'>${item.brand}</div>
          <div class='price'>${item.price}</div>
          <div class='price'>${item.cnt}</div>
        </div>
      `)
    })
  })
}
search()