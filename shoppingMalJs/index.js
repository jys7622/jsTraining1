var xhr;
var filterArr = [];
var filterArr2 = [];

function openJson(){
  xhr = new XMLHttpRequest();
  xhr.open('get', 'store.json', true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4) {
      if(xhr.status == 200){
        process2();
      }
    }
  }
  xhr.send(null);
}
openJson()

function process2(){
	/*Json 파일 읽어오기*/
	var data = xhr.responseText;
	//alert(data);/*그냥 Text 파일*/
	var parseData = JSON.parse(data);	//JSON라는 객체는 parse라는 메소드를 가지고 있음
	//alert(parseData);/*[object Object](객체화 됨)*/
	//alert(parseData.product.length);
	for (var i = 0; i < parseData.products.length; i++) {
    $('.card-container').append(`
      <div class='proCard'>
        <div class='title'>${parseData.products[i].title}</div>
        <div class='brand'>${parseData.products[i].brand}</div>
        <img src='${parseData.products[i].photo}'>
        <div class='price'>${parseData.products[i].price}</div>
        <button class="buyBtn">담기</button>
      </div> 
    `)
	}
  $('.buyBtn').on('click', function(e) {
    //필터로 전체 리스트에서 클릭한 것과 title이같은것만 찾는다
    products = parseData.products
    var title = $(e.target).siblings('.title').text();
    var filterItems = products.filter((item) => item.title === title)
    filterArr.push(filterItems)
    //담기버튼 누르면 해당 상품만 장바구니 div에 옮겨줘!
    // console.log(filterArr);
    // console.log(filterArr[3][0].id);
    for(var i = 0; i < filterArr.length; i++){
       $('.proStore-container').append(`
       <div class='proCard'>
       <div class='title'>${filterArr[i][0].title}</div>
       <div class='brand'>${filterArr[i][0].brand}</div>
       <img src='${filterArr[i][0].photo}'>
       <div class='price'>${filterArr[i][0].price}</div>
     </div> 
       `)
    }
  })
}
